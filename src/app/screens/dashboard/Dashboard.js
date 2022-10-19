/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser, storeUserInfo } from "../../redux/user/actions";
import SideBar from "../../components/SideBar";
import RightHeader from "../../components/RightHeader";
import MessagesContainer from "../../components/MessagesContainer";
import SenderInput from "../../components/SenderInput";
import {
  manageAllMessages,
  manageFilesObject,
  manageOnlineUsers,
  manageSendingQueue,
  manageTypingUsers,
  selectCurrentChannel,
  storeGroups,
} from "../../redux/groups/actions";
import Group from "../../services/Group";
import ConvoTemplate from "../../components/ConvoTemplate";
import Loader from "react-loader-spinner";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingGroups: true,
      Client: {},
    };
  }

handleResize=()=>{
  console.log('resize value-->',window.innerWidth);
  if(window.innerWidth>575){
    document.getElementsByClassName('leftSide')[0].style.display='block'
    document.getElementsByClassName('rightSide')[0].style.display='block'

  }
}

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.initializeChatSdk();
  }

  initializeChatSdk = () => {
    let url =
      window.location.protocol === "https:"
        ? "wss://vte4.vdotok.com"
        : "ws://vte4.vdotok.com";
    let port = window.location.protocol === "https:" ? "443" : "8080";
    // let connectionData = {
    //   host: url,
    //   port: port,
    //   auth_token: this.props.user.auth_token,
    //   credentials: {
    //     username: this.props.user.ref_id,
    //     password: this.props.user.authorization_token,
    //   },
    //   clientId: this.props.user.user_id,
    //   reConnectivity: true,
    //   projectID: "15Q89R",
    //   secret: "cWV91camkwd99XO9rvHmamvXxGdyeHK5",
    // };
var Client = new MVDOTOK.Client({
  projectID: "115G1WZI",
  secret: "3d9686b635b15b5bc2d19800407609fa",
  host: `${this.props.user.messaging_server_map.protocol}://${this.props.user.messaging_server_map.host}:${this.props.user.messaging_server_map.port}`
});
// this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
    // console.log("data before initializing sdk", connectionData);
    // var Client = new MVDOTOK.Client(connectionData);
    console.log("client after initializing==>", Client);
    Client.Register(
      this.props.user.ref_id,
      this.props.user.authorization_token
    );

    // Client.on("authenticated", (res) => {
    //   console.log("**res on authenticated sdk", res);
    //   console.log(
    //     "**now ready to regiter client",
    //     this.props.user.ref_id,
    //     this.props.user.authorization_token
    //   );

    //   Client.Register(
    //     this.props.user.ref_id,
    //     this.props.user.authorization_token
    //   );
    // });

    Client.on("connect", (res) => {
      console.log("**res on connect sdk", res); 
      if (window.innerWidth < 576) {
        document.getElementsByClassName(
          "leftSide"
        )[0].style.display = "block";
        document.getElementsByClassName(
          "rightSide"
        )[0].style.display = "none";
        this.props.setCurrentChannel(null);
      }
      // let obj={}
      // this.props.manageOnlineUsers({...obj})
      // this.props.manageTypingUsers({...obj})
      // this.props.setCurrentChannel(null)
  
      // this.props.manageAllMessages({...obj})
      // this.props.manageSendingQueue([])
      // this.props.manageFilesObject({...obj})

      this.getGroups();
    });

    Client.on("subscribed", (response) => {
      console.log("**res on subscribe  ", response);
      this.setOnlineSubscribers(response);
    });

    Client.on("online", (response) => {
      console.log("**res on online  ", response);
      this.setUserOnline(response);
    });

    Client.on("create", (response) => {
      console.log("**res on create  ", response);
    });

    Client.on("offline", (response) => {
      console.log("**res on offline  ", response);
      this.setUserOffline(response);
    });

    Client.on("message", (response) => {
      console.log("**res on message ", response);
      if (response.from == this.props.user.ref_id) {
        this.onMyMessageReceived(response);
      } else {
        this.onOtherMessageReceived(response);
      }
      // if(res.type=='typing'){

      // }else if(res.from==this.props.user.ref_id){
      //   this.myMessage()
      // }
    });

    Client.on("messagesent", (response) => {
      // console.log("**res on messagesent ",response);
    });

    this.setState({ Client: Client });
  };

  onOtherMessageReceived = (response) => {
    //     content: "1"
    // from: "867fe56203378f033e3d50747a671e98"
    // id: "1632222176802"
    // isGroupMsg: true
    // key: "AACO5B_L67HeJxw7InqZz46n9DR2KyJQ"
    // size: 0
    // to: "15Q89R-1153/"
    // type: "typing"

    let res = response;
    console.log("** on message from other in funct-->", res);

    if (res.type == "typing") {
      if (res.content == "1") {
        let tempTyping = this.props.typingUsers;
        let arr = [...new Set(tempTyping[res.to])];
        let indexx = arr.findIndex((e) => e === res.from);
        if (indexx == -1) {
          arr.push(res.from);
          tempTyping[res.to] = [...arr];
          this.props.manageTypingUsers({ ...tempTyping });
        }
      } else if (res.content == "0") {
        let tempTyping = this.props.typingUsers;
        let arr = [...new Set(tempTyping[res.to])];
        let indexx = arr.findIndex((e) => e === res.from);

        if (indexx > -1) {
          arr.splice(indexx, 1);
          tempTyping[res.to] = [...arr];
          this.props.manageTypingUsers({ ...tempTyping });
        }
      }
    }

    if (res.receiptType) {
      console.log("** this is receipt model message", res);
      if (res.receiptType === 3) {
        let msgobj = this.props.allRoomsMessages;
        let currentmsgsAray = [...new Set(msgobj[res.to])];
        let indexx = currentmsgsAray.findIndex((e) => e.id === res.messageId);
        if (indexx > -1) {
          if (currentmsgsAray[indexx].seen_by) {
            if (
              currentmsgsAray[indexx].seen_by.findIndex((l) => l == res.from) >
              -1
            ) {
            } else {
              currentmsgsAray[indexx].seen_by.push(res.from);
              msgobj[res.to] = [...currentmsgsAray];
              this.props.manageAllMessages({ ...msgobj });
            }
          }
        }
      }
    }

    if (res.type === "text") {
      let msgobj = this.props.allRoomsMessages;
      let currentmsgsAray = [...new Set(msgobj[res.to])];
      res["send_receipt"] = false;
      if (
        this.props.currentChannel &&
        res.to === this.props.currentChannel.channel_name
      ) {
        let receipt = {
          messageId: res.id,
          receiptType: 3,
          from: this.props.user.ref_id,
          key: res.key,
          to: res.to,
          date: new Date().getTime(),
        };
        this.state.Client.SendReceipt(receipt);
        res["send_receipt"] = true;
      }
      currentmsgsAray.push(res);
      msgobj[res.to] = [...currentmsgsAray];
      this.props.manageAllMessages({ ...msgobj });
    }

    if (res.type !== "text" && res.type !== "typing" && !res.receiptType) {
      if (!res.content) {
        let object = {};
        object["content"] = "";
        object["date"] = new Date().getTime();
        object["ext"] = res.ext;
        object["filename"] = res.filename;
        object["from"] = res.from;
        object["id"] = res.id;
        object["isBuffering"] = res.isBuffering;
        object["isGroupMessage"] = res.isGroupMessage;
        object["key"] = res.key;
        object["seen_by"] = res.seen_by;
        object["size"] = res.size;
        object["status"] = res.status;
        object["subtype"] = res.subtype;
        object["to"] = res.to;
        object["type"] = res.type;
        object["seen_by"] = [];
        object["loading"] = true;
        object["send_receipt"] = false;

        // object["send_receipt"] = false;

        // let sendingqueue = [...this.props.sendingQueue];
        //   sendingqueue.push(idd);
        //   this.props.manageSendingQueue([...sendingqueue]);
        // this.props.Client.SendFile(this.state.attachment,object);

        if (
          this.props.currentChannel &&
          res.to === this.props.currentChannel.channel_name
        ) {
          let receipt = {
            messageId: res.id,
            receiptType: 3,
            from: this.props.user.ref_id,
            key: res.key,
            to: res.to,
            date: new Date().getTime(),
          };
          this.state.Client.SendReceipt(receipt);
          object["send_receipt"] = true;
        }

        // object['content']=res.id
        let msgobj = this.props.allRoomsMessages;
        let currentmsgsAray = [...new Set(msgobj[res.to])];
        let msgindex=currentmsgsAray.findIndex(e=>e.id==res.id)
        if(msgindex==-1){
          currentmsgsAray.push(object);
          msgobj[res.to] = [...currentmsgsAray];
          this.props.manageAllMessages({ ...msgobj });
        }
      } else if (res.content) {
        let msgobj = this.props.allRoomsMessages;
        let currentmsgsAray = [...new Set(msgobj[res.to])];
        let indexx = currentmsgsAray.findIndex((e) => e.id == res.id);
        if (indexx > -1) {
          let temp = this.props.filesObject;
          temp[res.id] = res.content;
          this.props.manageFilesObject({ ...temp });

          currentmsgsAray[indexx]["content"] = res.id;
          currentmsgsAray[indexx]["loading"] = false;

          msgobj[res.to] = [...currentmsgsAray];

          this.props.manageAllMessages({ ...msgobj });
        }

      }
    }
  };
  onMyMessageReceived = (res) => {
    console.log("** on my msg in funct-->", res);
    if (res.type === "text") {
      let sendingqueue = [...this.props.sendingQueue];
      let indexx = sendingqueue.findIndex((e) => e == res.id);
      if (indexx > -1) {
        sendingqueue.splice(indexx, 1);
        this.props.manageSendingQueue([...sendingqueue]);
      }
    }
    if (res.type !== "text" && res.type !== "typing" && !res.receiptType) {
      if (!res.content) {

        let object = {};
        object["content"] = "";
        object["date"] = new Date().getTime();
        object["ext"] = res.ext;
        object["filename"] = res.filename;
        object["from"] = res.from;
        object["id"] = res.id;
        object["isBuffering"] = res.isBuffering;
        object["isGroupMessage"] = res.isGroupMessage;
        object["key"] = res.key;
        object["seen_by"] = res.seen_by;
        object["size"] = res.size;
        object["status"] = res.status;
        object["subtype"] = res.subtype;
        object["to"] = res.to;
        object["type"] = res.type;
        object["seen_by"] = [];
        object["loading"] = true;
        let msgobj = {...this.props.allRoomsMessages};
        let currentmsgsAray = [...msgobj[res.to]];
        let msgindex=currentmsgsAray.findIndex(e=>e.id==res.id)
        if(msgindex==-1){
          currentmsgsAray.push(object);
          msgobj[res.to] = [...currentmsgsAray];
          this.props.manageAllMessages({ ...msgobj });
        }
        
      } else if (res.content) {
        let msgobj = this.props.allRoomsMessages;
        let currentmsgsAray = [...new Set(msgobj[res.to])];
        let indexx = currentmsgsAray.findIndex((e) => e.id == res.id);
        if (indexx > -1) {
          let temp = this.props.filesObject;
          temp[res.id] = res.content;
          this.props.manageFilesObject({ ...temp });
          currentmsgsAray[indexx]["content"] = res.id;
          currentmsgsAray[indexx]["loading"] = false;
          msgobj[res.to] = [...currentmsgsAray];
          this.props.manageAllMessages({ ...msgobj });
        
        }

      }
    }
  };

  getGroups = () => {
    this.setState({ loadingGroups: true });

    this.props.setCurrentChannel(null);
    Group.getGroups(null, this.props.user.auth_token)
      .then((res) => {
        console.log("res on getgroups-->", res);
        if (res.data.status === 200) {
          let grpsToSubscribe = [];
          let manageOnlineObj = {};
          let allRoomsMessages = this.props.allRoomsMessages;
          let typingObj = {};
          let newArrayOfGroups=[]

          if (res.data.groups.length > 0) {
            res.data.groups.forEach((e) => {
              if(e.channel_name.length>0 && e.channel_key.length>0){

              manageOnlineObj[e.channel_name] = [];
              allRoomsMessages[e.channel_name] = [];
              typingObj[e.channel_name] = [];

              grpsToSubscribe.push({
                key: e.channel_key,
                channel: e.channel_name,
              });

              newArrayOfGroups.push(e)
            }
          });
            this.props.manageOnlineUsers(manageOnlineObj);
            this.props.manageAllMessages({...allRoomsMessages});
            this.props.manageTypingUsers(typingObj);

            this.subscribeChannels(grpsToSubscribe);
          }

          this.props.setGroups([...newArrayOfGroups]);
        }
      })
      .catch((err) => {
        console.log("err on getgroups==>", err);
      })
      .finally(() => {
        this.setState({ loadingGroups: false });
      });
  };

  subscribeChannels = (groups) => {
    groups.forEach((e) => {
      this.state.Client.Subscribe(e);
    });
  };

  disconnectSDK = () => {
    this.state.Client.Disconnect();
    this.setState({ Client: {} });
  };

  setOnlineSubscribers = (res) => {
    let onlineObject = this.props.onlineUsers;
    let arr = [];
    res.who.forEach((e) => {
      if (arr.findIndex((a) => a.username == e.username) == -1) {
        arr.push(e);
      }
    });
    onlineObject[res.channel] = arr;
    this.props.manageOnlineUsers({ ...onlineObject });
  };

  setUserOffline = (res) => {
    let onlineObject = this.props.onlineUsers;
    let arr = [...new Set(onlineObject[res.channel])];
    let ind = arr.findIndex((e) => e.username === res.who.username);

    if (ind > -1) {
      arr.splice(ind, 1);
      onlineObject[res.channel] = [...arr];
      this.props.manageOnlineUsers({ ...onlineObject });
    }
  };

  setUserOnline = (res) => {
    let onlineObject = this.props.onlineUsers;
    let arr = [...new Set(onlineObject[res.channel])];
    let ind = arr.findIndex((e) => e.username === res.who.username);

    if (ind == -1) {
      arr.push(res.who);
      onlineObject[res.channel] = [...arr];
      this.props.manageOnlineUsers({ ...onlineObject });
    }
  };

  render() {
    return (
      <div className="row dashboardContainer">
        <SideBar
          Client={this.state.Client}
          getGroups={this.getGroups}
          loadingGroups={this.state.loadingGroups}
          disconnectSDK={this.disconnectSDK}
        />

        <div className="col-sm-8 rightSide">
          <RightHeader />
          <div className="messagesBox">
            {this.state.loadingGroups ? (
              <div style={styles.loaderContainer}>
                <Loader
                  type="Grid"
                  color="#4E9D93"
                  style={{ marginTop: 5 }}
                  height={50}
                  width={50}
                />
              </div>
            ) : this.props.groups.length === 0 ? (
              <ConvoTemplate noChat />
            ) : this.props.currentChannel ? (
              <MessagesContainer />
            ) : (
              <ConvoTemplate noSelectedConvo />
            )}
          </div>
          <div className="sendInputContainer">
            {this.props.currentChannel && (
              <SenderInput Client={this.state.Client} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setGroups: (groups) => dispatch(storeGroups(groups)),
    manageOnlineUsers: (obj) => dispatch(manageOnlineUsers(obj)),
    manageTypingUsers: (obj) => dispatch(manageTypingUsers(obj)),

    setCurrentChannel: (channel) => dispatch(selectCurrentChannel(channel)),
    manageAllMessages: (messagesObj) =>
      dispatch(manageAllMessages(messagesObj)),
    manageSendingQueue: (queueArray) =>
      dispatch(manageSendingQueue(queueArray)),
    manageFilesObject: (filesObject) =>
      dispatch(manageFilesObject(filesObject)),
  };
};
const mapStateToProps = (state) => {
  console.log("redux state==>", state);
  return {
    user: state.user.user,
    groups: state.group.groups,
    currentChannel: state.group.currentChannel,
    onlineUsers: state.group.onlineUsers,
    allRoomsMessages: state.group.allRoomsMessages,
    sendingQueue: state.group.sendingQueue,
    typingUsers: state.group.typingUsers,
    filesObject: state.group.filesObject,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  text: {
    color: "white",
  },
  loaderContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
