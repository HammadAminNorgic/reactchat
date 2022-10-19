import React, { Component } from "react";
import { connect } from "react-redux";
import attachment from "../assets/images/attachment.png";
import doc from "../assets/images/Document.png";
import send from "../assets/images/send.png";
import cancel from "../assets/images/cancel.png";

import {
  manageAllMessages,
  manageFilesObject,
  manageSendingQueue,
  selectCurrentChannel,
} from "../redux/groups/actions";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SenderInput extends Component {
  refernceInputFile = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      messageBody: "",
      attachment: null,
      attachmentBase64: "",
    };
  }
  getAttachment = (e) => {
    console.log("attachmentpicked==>", e.target.files[0]);
    if (e.target.files[0].size > 6000000) {
      toast.dismiss();
      toast.error("File size must not be larger than 6 MB", {
        position: "top-right",
        transition: Zoom,
        theme: "light",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // const reader = new FileReader();
      // reader.readAsDataURL(e.target.files[0]);
      // reader.onload = () => {
      //   console.log("in reader on load", reader.result);
      //   this.setState({
      //     attachment: e.target.files[0],
      //     attachmentBase64: reader.result,
      //   });
      // };
      this.setState({
        attachment: e.target.files[0],
      });
    }
  };
  pickAttachment = async () => {
    this.refernceInputFile.current.click();
  };

  onSendMessage = () => {
    if (this.state.messageBody.trim().length === 0) {
      console.log("cannot send empty message==>");
    } else if (this.state.messageBody.trim().length > 400) {
      console.log("message cannot be greater then 400 characters==>");
      toast.dismiss();
      toast.error("cannot send msg with characters greater then 400!", {
        position: "top-right",
        transition: Zoom,
        theme: "light",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let idd = new Date().getTime().toString();
      let msg = {
        status: 1,
        size: 0,
        type: "text",
        isGroupMessage: this.props.currentChannel.auto_created == 0,
        from: this.props.user.ref_id,
        content: this.state.messageBody.trim(),
        id: idd,
        date: new Date().getTime(),
        key: this.props.currentChannel.channel_key,
        to: this.props.currentChannel.channel_name,
      };
      let sendingqueue = [...this.props.sendingQueue];
      sendingqueue.push(idd);
      this.props.manageSendingQueue([...sendingqueue]);

      this.props.Client.SendMessage(msg);

      let msgobj = this.props.allRoomsMessages;
      let currentmsgsAray = [
        ...new Set(msgobj[this.props.currentChannel.channel_name]),
      ];
      msg["seen_by"] = [];
      currentmsgsAray.push(msg);
      msgobj[this.props.currentChannel.channel_name] = [...currentmsgsAray];
      this.props.manageAllMessages({ ...msgobj });
      this.setState({ messageBody: "" });
      this.nameInput.blur();

      this.nameInput.focus();
    }
  };
  sendFile = () => {
    console.log("in sending file-->");
    let idd = new Date().getTime().toString();
    let type = "file";
    let filetype = this.state.attachment.type;
    if (filetype.includes("image")) {
      type = "image";
    } else if (filetype.includes("audio")) {
      type = "audio";
    } else if (filetype.includes("video")) {
      type = "video";
    }
    
    let object = {
      id: idd,
      from: this.props.user.ref_id,
      topic: this.props.currentChannel.channel_name,
      to: this.props.currentChannel.channel_name,
      key: this.props.currentChannel.channel_key,
      type: type,
      // isGroupMessage: this.props.currentChannel.auto_created == 0,
      date: idd,
    };

    // let temp=this.props.filesObject
    // temp[idd]=this.state.attachmentBase64
    // this.props.manageFilesObject({...temp})



    // let sendingqueue = [...this.props.sendingQueue];
    //   sendingqueue.push(idd);
    //   this.props.manageSendingQueue([...sendingqueue]);
    console.log('this is object to be send-->',object);
    this.props.Client.SendFile(this.state.attachment,object);

  // let msgobj = this.props.allRoomsMessages;
  // let currentmsgsAray = [
  //   ...new Set(msgobj[this.props.currentChannel.channel_name]),
  // ];
  // object["seen_by"] = [];
  // object['content']=idd
  // currentmsgsAray.push(object);
  // msgobj[this.props.currentChannel.channel_name] = [...currentmsgsAray];
  // this.props.manageAllMessages({ ...msgobj });
  this.setState({ attachment: null, attachmentBase64: "" })


  };
  

  // _onFocus=()=>{
  //   console.log('on focus-->');
  //   let typingMessage={
  //         from: this.props.user.ref_id,
  //         content: "1",
  //         id: new Date().getTime().toString(),
  //         size: 0,
  //         key: this.props.currentChannel.channel_key,
  //         type: "typing",
  //         to: this.props.currentChannel.channel_name,
  //         isGroupMsg: this.props.currentChannel.auto_created == 0,
  //     }
  //     this.props.Client.SendMessage(typingMessage);
  //   clearTimeout(this.timeOut)
  //     this.timeOut=setTimeout(() => {
  //       this.nameInput.blur();
  //       this._onBlur()
  //     }, 7000);

  // }
  _onBlur = () => {
    clearTimeout(this.timeOut);
    setTimeout(() => {
      console.log("on blur-->");
      let typingMessage = {
        from: this.props.user.ref_id,
        content: "0",
        id: new Date().getTime().toString(),
        size: 0,
        key: this.props.currentChannel.channel_key,
        type: "typing",
        to: this.props.currentChannel.channel_name,
        isGroupMsg: this.props.currentChannel.auto_created == 0,
      };
      this.props.Client.SendMessage(typingMessage);
    }, 0);
  };

  render() {
    return (
      <div className="sendInputWrapper">
        {this.state.attachment ? (
          <input
            disabled
            value={this.state.attachment.name}
            type="text"
            className="form-control"
          />
        ) : (
          <input
            ref={(input) => {
              this.nameInput = input;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                this.onSendMessage();
              }
            }}
            value={this.state.messageBody}
            onChange={(e) => {
              this.setState({ messageBody: e.target.value });
              let typingMessage = {
                from: this.props.user.ref_id,
                content: "1",
                id: new Date().getTime().toString(),
                size: 0,
                key: this.props.currentChannel.channel_key,
                type: "typing",
                to: this.props.currentChannel.channel_name,
                isGroupMsg: this.props.currentChannel.auto_created == 0,
              };
              this.props.Client.SendMessage(typingMessage);
              clearTimeout(this.timeOut);
              this.timeOut = setTimeout(() => {
                // this.nameInput.blur();
                this._onBlur();
              }, 3000);
            }}
            onFocus={this._onFocus}
            onBlur={this._onBlur}
            type="text"
            className="form-control"
            placeholder="Type to reply.."
          />
        )}
        {!this.state.attachment && (
          <div
            className="sendInputButtonContainer dropup"
            style={{ borderColor: "#ebedf4", borderWidth: 1 }}
          >
            <img
              src={attachment}
              data-toggle="dropdown"
              className="sendIcon dropdown-toggle"
            />
            <div className="dropdown-menu dropdown-menu-right selectOptionContainer">
              <div className="attachmentPopHeader">
                <p className="attachmentHeading">ADD ATTACHMENT</p>
                <p className="attachmentHeading">X</p>
              </div>
              <div className="attachmentPopContent">
                <div
                  onClick={() => this.pickAttachment()}
                  className="attachmentTool"
                >
                  <div className="attachmentToolIcon">
                    <img src={doc} className="attachmentItemIcon" />
                  </div>
                  <span className="attachmentSubText">File</span>
                </div>
                <input
                  type="file"
                  onChange={(e) => this.getAttachment(e)}
                  style={{ display: "none" }}
                  ref={this.refernceInputFile}
                />
              </div>
            </div>
          </div>
        )}
        {this.state.attachment && (
          <div
            onClick={() =>
              this.setState({ attachment: null, attachmentBase64: "" })
            }
            className="sendInputButtonContainer"
          >
            <img src={cancel} className="sendIcon" />
          </div>
        )}
        <div
          onClick={() => {
            if (this.state.attachment) {
              this.sendFile();
            } else {
              this.onSendMessage();
            }
          }}
          className="sendInputButtonContainer"
        >
          <img src={send} className="sendIcon" />
        </div>
        <ToastContainer
          transition={Zoom}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
    filesObject: state.group.filesObject,

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SenderInput);

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
};
