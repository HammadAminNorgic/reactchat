import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser, storeUserInfo } from "../redux/user/actions";
import Modal from "react-bootstrap-modal";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/images/logo2.png";
import more from "../assets/images/more.png";
import logout from "../assets/images/log-out.png";
import call from "../assets/images/call.png";
import vidcall from "../assets/images/video-call.png";
import arrowLeft from "../assets/images/arrow-left.png";
import checkmark from "../assets/images/checkmark.png";
import search from "../assets/images/search.png";
import NoGroupContainer from "./NoGroupsContainer";
import user from "../assets/images/User.png";
import grpchat from "../assets/images/Group Chat.png";
import chat from "../assets/images/chat.png";
import Loader from "react-loader-spinner";
import Group from "../services/Group";
import refresh from "../assets/images/refresh.png";
import checkmarkcircle from "../assets/images/checkmark-circle.png";
import cross from "../assets/images/cross.png";
import {
  manageAllMessages,
  manageOnlineUsers,
  manageTypingUsers,
  selectCurrentChannel,
  storeAllUsers,
  storeGroups,
} from "../redux/groups/actions";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createGroupScreen: 1,
      loadingUsers: true,
      users: [],
      search: "",
      groupsearch: "",
      selectedUsers: [],
      groupNamePopup: false,
      groupName: "",
      groupnameError: "",
      createGroupLoading: false,
      renameGroupPopup: false,
      groupToRename: {},
      renameloading: false,
      renameError: "",
      renameValue: "",
      chatToDelete: {},
      chatpopup: false,
      deletechatloading: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.getAllUsers();
    }, 500);
  }

  getAllUsers = () => {
    this.setState({
      loadingUsers: true,
      search: "",
      groupsearch: "",
      selectedUsers: [],
    });
    let data = {};
    Group.getAllUsers(data, this.props.user.auth_token)
      .then((res) => {
        console.log("res on allUsers==>", res);
        if (res.data.status === 200) {
          this.setState({ users: res.data.users });
          this.props.storeAllUsers([...res.data.users]);
        }
      })
      .catch((err) => {
        console.log("err on getallusers", err);
      })
      .finally(() => {
        this.setState({ loadingUsers: false });
      });
  };

  selectUsertoCreateGroup(user) {
    console.log("onclick single user==>", user);
    if (this.state.selectedUsers.findIndex((e) => e == user.user_id) > -1) {
      let arr = [...this.state.selectedUsers];
      arr.splice(
        this.state.selectedUsers.findIndex((e) => e == user.user_id),
        1
      );
      this.setState({ selectedUsers: [...arr] });
    } else {
      if (this.state.selectedUsers.length < 4) {
        this.setState({
          selectedUsers: this.state.selectedUsers.concat(user.user_id),
        });
      } else {
        toast.dismiss();
        toast.error("Cannot Select More than 4 participants", {
          position: "top-left",
          transition: Zoom,
          theme: "dark",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  showNamePopup = () => {
    this.setState({ groupNamePopup: true });
  };

  createGroup = () => {
    if (this.state.groupName.trim().length === 0) {
      this.setState({ groupnameError: "Please Enter Group Name !" });
    } else {
      this.setState({ createGroupLoading: true });
      let data = {
        group_title: this.state.groupName.trim(),
        participants: this.state.selectedUsers,
        auto_created: 0,
      };
      Group.createNewGroup(data, this.props.user.auth_token)
        .then((res) => {
          console.log("res on creategroup==>", res);
          if (res.data.status === 200) {


            // this.props.getGroups();
           if(res.data.group.channel_key && res.data.group.channel_name){
           

            if (!res.data.is_already_created) {
              let mngonline = this.props.onlineUsers;
              mngonline[res.data.group.channel_name] = [];
              this.props.manageOnlineUsers({ ...mngonline });

              let allMessages = this.props.allRoomsMessages;
              allMessages[res.data.group.channel_name] = [];
              this.props.manageAllMessages({ ...allMessages });

              let typingObj = this.props.typingUsers;
              typingObj[res.data.group.channel_name] = [];
              this.props.manageTypingUsers({ ...typingObj });

              let tempgroups = this.props.groups;
              tempgroups.unshift(res.data.group);
              this.props.setGroups([...tempgroups]);
              this.props.Client.Subscribe({
                key: res.data.group.channel_key,
                channel: res.data.group.channel_name,
              });
            } else {
              this.props.setCurrentChannel(res.data.group);
            }

            this.setState({
              groupNamePopup: false,
              createGroupScreen: 1,
              search: "",
              groupsearch: "",
              selectedUsers: [],
              groupNamePopup: false,
              groupName: "",
              groupnameError: "",
            });

           }else{



            this.setState({
              groupNamePopup: false,
              createGroupScreen: 1,
              search: "",
              groupsearch: "",
              selectedUsers: [],
              groupNamePopup: false,
              groupName: "",
              groupnameError: "",
            });
            toast.dismiss();
        toast.error("channel Key or channel name is missing in api response !", {
          position: "top-left",
          transition: Zoom,
          theme: "dark",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

            
          }
           }
        })
        .catch((err) => {
          console.log("err on create group==>", err);
        })
        .finally(() => {
          this.setState({ createGroupLoading: false });
        });

      console.log(data);
    }
  };

  createOnetoOnegroup = (user) => {
    console.log("one to one user===>", user);
    let data = {
      group_title: `${user.full_name}-${this.props.user.full_name}`,
      participants: [user.user_id],
      auto_created: 1,
    };
    Group.createNewGroup(data, this.props.user.auth_token)
      .then((res) => {
        console.log("res on create one to one group==>", res);
        if (res.data.status === 200) {
          if(res.data.group.channel_key && res.data.group.channel_name){

          if (!res.data.is_already_created) {
            let mngonline = this.props.onlineUsers;
            mngonline[res.data.group.channel_name] = [];
            this.props.manageOnlineUsers(mngonline);

            let allMessages = this.props.allRoomsMessages;
            allMessages[res.data.group.channel_name] = [];
            this.props.manageAllMessages(allMessages);

            let typingObj = this.props.typingUsers;
            typingObj[res.data.group.channel_name] = [];
            this.props.manageTypingUsers({ ...typingObj });

            let tempgroups = this.props.groups;
            tempgroups.unshift(res.data.group);
            this.props.setGroups([...tempgroups]);
            this.props.Client.Subscribe({
              key: res.data.group.channel_key,
              channel: res.data.group.channel_name,
            });
          } else {
            this.props.setCurrentChannel(res.data.group);
          }
          // this.props.getGroups();

          this.setState({
            groupNamePopup: false,
            createGroupScreen: 1,
            search: "",
            groupsearch: "",
            selectedUsers: [],
            groupNamePopup: false,
            groupName: "",
            groupnameError: "",
          });
        }else{
          this.setState({
            groupNamePopup: false,
            createGroupScreen: 1,
            search: "",
            groupsearch: "",
            selectedUsers: [],
            groupNamePopup: false,
            groupName: "",
            groupnameError: "",
          });
          toast.dismiss();
      toast.error("channel Key or channel name is missing in api response !", {
        position: "top-left",
        transition: Zoom,
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
        }}
      })
      .catch((err) => {
        console.log("err on create one to one group==>", err);
      })
      .finally(() => {
        // this.setState({createGroupLoading:false})
      });
  };

  renameGroup = () => {
    if (this.state.renameValue.trim().length === 0) {
      this.setState({ renameError: "Please Enter Group Name !" });
    } else {
      this.setState({ renameloading: true });
      let data = {
        group_title: this.state.renameValue.trim(),
        group_id: this.state.groupToRename.id,
      };
      console.log("==>", data);

      Group.renameGroup(data, this.props.user.auth_token)
        .then((res) => {
          console.log("res on rename-->", res);
          if (res.data.status == 200) {
            toast.dismiss();
            toast.success("group name updated !", {
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

            let tempgroups = [...this.props.groups];
            let indexx = tempgroups.findIndex(
              (e) => e.id === this.state.groupToRename.id
            );
            console.log("group to rename index==>", indexx);
            tempgroups[indexx].group_title = data.group_title;
            this.props.setGroups([...tempgroups]);
            this.setState({
              renameGroupPopup: false,
              groupToRename: {},
              renameloading: false,
              renameError: "",
              renameValue: "",
            });
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.setState({ renameloading: false });
        });
    }
  };

  deleteGroupPopup = (group) => {
    if (group.admin_id !== this.props.user.user_id) {
      toast.dismiss();
      toast.error("Only admin can delete !", {
        position: "top-left",
        transition: Zoom,
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      this.setState({ chatToDelete: group, chatpopup: true });
    }
  };

  deleteChat = () => {
    this.setState({ deletechatloading: true });
    let data = {
      group_id: this.state.chatToDelete.id,
    };
    Group.deleteGroup(data, this.props.user.auth_token)
      .then((res) => {
        console.log("res on delete group==>", res);
        if (res.data.status == 200) {
          if (
            this.props.currentChannel && this.props.currentChannel.channel_key ===
            this.state.chatToDelete.channel_key
          ) {
            this.props.setCurrentChannel(null);
          }
          let tempgroups = [...this.props.groups];
          let indexx = tempgroups.findIndex(
            (e) => e.id === this.state.chatToDelete.id
          );
          console.log("group to delete index==>", indexx);
          tempgroups.splice(indexx, 1);
          this.props.setGroups([...tempgroups]);

          let mngonline = this.props.onlineUsers;
          delete mngonline[this.state.chatToDelete.channel_name];
          this.props.manageOnlineUsers({ ...mngonline });

          let allMessages = this.props.allRoomsMessages;
          delete allMessages[this.state.chatToDelete.channel_name];
          this.props.manageAllMessages({ ...allMessages });

          let typingobjj = this.props.typingUsers;
          delete typingobjj[this.state.chatToDelete.channel_name];
          this.props.manageTypingUsers({ ...typingobjj });

          this.props.Client.UnSubscribe({
            key: this.state.chatToDelete.channel_key,
            channel: this.state.chatToDelete.channel_name,
          });
          this.setState({
            chatToDelete: {},
            chatpopup: false,
            deletechatloading: false,
          });
        }
      })
      .catch((err) => {
        console.log("err on delete group==>", err);
      })
      .finally(() => {
        this.setState({ deletechatloading: false });
      });
  };

  render() {
    console.log("props in sidebar==>", this.props);

    let filteredUsers =
      this.state.search.trim().length === 0
        ? this.state.users
        : this.state.users.filter((e) =>
            e.full_name
              .toLowerCase()
              .startsWith(this.state.search.toLowerCase())
          );

    let filteredGroupUsers =
      this.state.groupsearch.trim().length === 0
        ? this.state.users
        : this.state.users.filter((e) =>
            e.full_name
              .toLowerCase()
              .startsWith(this.state.groupsearch.toLowerCase())
          );

    return (
      <>
        {this.state.groupNamePopup && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="createChatPopup"
          >
            <div  className="chatPopupContent">
              <div className="modalHeader">
                <p className="modalHeading">Create a group chat</p>
                <img
                  onClick={() => {
                    if (!this.state.createGroupLoading) {
                      this.setState({
                        groupNamePopup: false,
                        groupName: "",
                        groupnameError: "",
                      });
                    }
                  }}
                  src={cross}
                  style={{
                    cursor: "pointer",
                    opacity: this.state.createGroupLoading ? 0.5 : 1,
                  }}
                  className="modalCross"
                />
              </div>
              <div className="modalContent">
                <p className="modalContentHeading">Name your group chat</p>
                <input
                  disabled={this.state.createGroupLoading}
                  value={this.state.groupName}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      this.createGroup();
                    }
                  }}
                  onChange={(e) => {
                    this.setState({
                      groupName: e.target.value,
                      groupnameError: "",
                    });
                  }}
                  type="text"
                  className="form-control"
                  placeholder="ex: Deeper team"
                />
                {this.state.groupnameError && (
                  <p className="inputError">{this.state.groupnameError}</p>
                )}
              </div>
              <button
                disabled={this.state.createGroupLoading}
                onClick={() => this.createGroup()}
                type="submit"
                className="btn doneButton"
              >
                {this.state.createGroupLoading ? (
                  <Loader
                    type="ThreeDots"
                    color="white"
                    style={{ marginBottom: 5 }}
                    height={40}
                    width={40}
                  />
                ) : (
                  "DONE"
                )}
              </button>
            </div>
          </div>
        )}

        {this.state.renameGroupPopup && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="createChatPopup"
          >
            <div  className="chatPopupContent">
              <div className="modalHeader">
                <p className="modalHeading">Rename group chat</p>
                <img
                  onClick={() => {
                    if (!this.state.renameloading) {
                      this.setState({
                        renameGroupPopup: false,
                        renameValue: "",
                        renameError: "",
                        groupToRename: {},
                      });
                    }
                  }}
                  src={cross}
                  style={{
                    cursor: "pointer",
                    opacity: this.state.renameloading ? 0.5 : 1,
                  }}
                  className="modalCross"
                />
              </div>
              <div className="modalContent">
                <p className="modalContentHeading">Name your group chat</p>
                <input
                  disabled={this.state.renameloading}
                  value={this.state.renameValue}
                  onChange={(e) => {
                    this.setState({
                      renameValue: e.target.value,
                      renameError: "",
                    });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      this.renameGroup();
                    }
                  }}
                  type="email"
                  className="form-control"
                  placeholder="ex: Deeper team"
                />
                {this.state.renameError && (
                  <p className="inputError">{this.state.renameError}</p>
                )}
              </div>
              <button
                disabled={this.state.renameloading}
                onClick={() => this.renameGroup()}
                type="submit"
                className="btn doneButton"
              >
                {this.state.renameloading ? (
                  <Loader
                    type="ThreeDots"
                    color="white"
                    style={{ marginBottom: 5 }}
                    height={40}
                    width={40}
                  />
                ) : (
                  "DONE"
                )}
              </button>
            </div>
          </div>
        )}
        {this.state.chatpopup && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="createChatPopup"
          >
            <div
              style={{  height: 200 }}
              className="chatPopupContent"
            >
              <div className="modalHeader">
                <p className="modalHeading">Delete chat</p>
                <img
                  onClick={() => {
                    if (!this.state.deletechatloading) {
                      this.setState({
                        chatpopup: false,
                        chatToDelete: {},
                      });
                    }
                  }}
                  src={cross}
                  style={{
                    cursor: "pointer",
                  }}
                  className="modalCross"
                />
              </div>
              <div className="modalContent">
                <p className="modalContentHeading">
                  Are you sure to delete this chat ?
                </p>
              </div>
              <button
                disabled={this.state.deletechatloading}
                onClick={() => this.deleteChat()}
                type="submit"
                className="btn doneButton"
              >
                {this.state.deletechatloading ? (
                  <Loader
                    type="ThreeDots"
                    color="white"
                    style={{ marginBottom: 5 }}
                    height={40}
                    width={40}
                  />
                ) : (
                  "YES"
                )}
              </button>
            </div>
          </div>
        )}
        <div className="col-sm-4 leftSide">
          <div className="leftSideHeader">
            <img src={logo} className="dashboardLogo" />
          </div>
          <div className="leftSideListContainer">
            {this.state.createGroupScreen === 2 ? (
              <div className="newChatContainer">
                <div style={{ padding: 0 }} className="newChatHeader">
                  <div className="newChatLeft">
                    <img
                      onClick={() =>
                        this.setState({ createGroupScreen: 1, search: "" })
                      }
                      src={arrowLeft}
                      style={{ cursor: "pointer" }}
                      className="arrowLeft"
                    />
                    <p className="newChatHeading">New Chat</p>
                    <span>
                      <img
                        onClick={() => {
                          if (!this.state.loadingUsers) {
                            this.getAllUsers();
                          }
                        }}
                        src={refresh}
                        style={{
                          height: 17,
                          width: 17,
                          objectFit: "contain",
                          marginLeft: 15,
                          opacity: 0.5,
                          cursor: "pointer",
                        }}
                      />
                    </span>
                  </div>
                  <div className="newChatRight">
                    {/* <img className="goodMark" src={checkmark} /> */}
                  </div>
                </div>
                <div style={{ padding: 0 }} className="newChatSearchBox">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <img src={search} className="seacrchIcon" />
                    </div>
                    <input
                      value={this.state.search}
                      onChange={(e) =>
                        this.setState({ search: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div style={{ padding: 0 }} className="addGrpChat">
                  <div
                    onClick={() => this.setState({ createGroupScreen: 3 })}
                    style={{ cursor: "pointer" }}
                    className="addGrpChatTop"
                  >
                    <img src={grpchat} className="addgrpIcon" />
                    <p className="addGrpTitle">Add Group Chat</p>
                  </div>
                  <div className="addGrpSep"></div>
                  <p className="cntct">Contacts</p>
                </div>
                <div style={{ padding: 0 }} className="contactListContainer">
                  {this.state.loadingUsers ? (
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Loader
                        type="ThreeDots"
                        color="#4E9D93"
                        style={{ marginTop: 5 }}
                        height={50}
                        width={50}
                      />
                    </div>
                  ) : filteredUsers.length === 0 ? (
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p className="ListCardName">No user found..</p>
                    </div>
                  ) : (
                    <>
                      {filteredUsers.map((item, index) => (
                        <div key={index} className="contactListCard">
                          <div className="contactListCardLeft">
                            <img src={user} className="ListCardIcon" />
                            <p className="ListCardName">{item.full_name}</p>
                          </div>
                          <div className="contactListCardRight">
                            <img
                              style={{ opacity: 0 }}
                              src={call}
                              className="ListCardButton"
                            />
                            <img
                              style={{ opacity: 0 }}
                              src={vidcall}
                              className="ListCardButton"
                            />
                            <span
                              className="d-inline-block"
                              tabIndex="0"
                              data-toggle="tooltip"
                              title="Create Chat"
                            >
                              <img
                                onClick={() => {
                                  this.createOnetoOnegroup(item);
                                }}
                                src={chat}
                                className="ListCardButton"
                              />
                            </span>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ) : this.state.createGroupScreen === 3 ? (
              <div className="newChatContainer">
                <div className="newChatHeader noPadding">
                  <div style={{ cursor: "pointer" }} className="newChatLeft">
                    <img
                      onClick={() =>
                        this.setState({
                          createGroupScreen: 2,
                          search: "",
                          groupsearch: "",
                          selectedUsers: [],
                          groupNamePopup: false,
                          groupName: "",
                          groupnameError: "",
                        })
                      }
                      src={arrowLeft}
                      className="arrowLeft"
                    />
                    <p className="newChatHeading">Create Group Chat</p>
                    <span>
                      <img
                        onClick={() => {
                          if (!this.state.loadingUsers) {
                            this.getAllUsers();
                          }
                        }}
                        src={refresh}
                        style={{
                          height: 17,
                          width: 17,
                          objectFit: "contain",
                          marginLeft: 15,
                          opacity: 0.5,
                          cursor: "pointer",
                        }}
                      />
                    </span>
                  </div>
                  <div className="newChatRight">
                    {this.state.selectedUsers.length > 0 && (
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => this.showNamePopup()}
                        className="goodMark"
                        src={checkmark}
                      />
                    )}
                  </div>
                </div>
                <div className="newChatSearchBox noPadding">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <img src={search} className="seacrchIcon" />
                    </div>
                    <input
                      value={this.state.groupsearch}
                      onChange={(e) =>
                        this.setState({ groupsearch: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="newGrpChat">
                  <p className="cntct">Select Contacts</p>
                </div>
                <div className="newListContainer noPadding">
                  {this.state.loadingUsers ? (
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Loader
                        type="ThreeDots"
                        color="#4E9D93"
                        style={{ marginTop: 5 }}
                        height={50}
                        width={50}
                      />
                    </div>
                  ) : filteredGroupUsers.length === 0 ? (
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p className="ListCardName">No user found..</p>
                    </div>
                  ) : (
                    <>
                      {filteredGroupUsers.map((item, index) => (
                        <div
                          onClick={() => this.selectUsertoCreateGroup(item)}
                          style={{ cursor: "pointer" }}
                          key={index}
                          className="contactListCard"
                        >
                          <div className="contactListCardLeft">
                            <img src={user} className="ListCardIcon" />
                            <p className="ListCardName">{item.full_name}</p>
                          </div>
                          <div className="contactListCardRight singleIcon">
                            {this.state.selectedUsers.includes(
                              item.user_id
                            ) && (
                              <img
                                src={checkmarkcircle}
                                className="ListCardButton"
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ) : this.state.createGroupScreen === 1 ? (
              <div className="chatRoomContainer">
                <div className="leftSectionHeader">
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <h4 className="leftHeading">CHATS</h4>
                    <span>
                      <img
                        onClick={() => {
                          if (!this.props.loadingGroups) {
                            this.props.getGroups();
                            this.getAllUsers();
                          }
                        }}
                        src={refresh}
                        style={{
                          height: 17,
                          width: 17,
                          objectFit: "contain",
                          marginLeft: 15,
                          opacity: 0.5,
                          cursor: "pointer",
                          marginBottom: 10,
                        }}
                      />
                    </span>
                  </span>
                  <h4
                    onClick={() => this.setState({ createGroupScreen: 2 })}
                    className="createText"
                  >
                    Create +
                  </h4>
                </div>
                <div className="listingContainer fullHeight">
                  {this.props.loadingGroups ? (
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Loader
                        type="ThreeDots"
                        color="#4E9D93"
                        style={{ marginTop: 5 }}
                        height={50}
                        width={50}
                      />
                    </div>
                  ) : this.props.groups.length === 0 ? (
                    <NoGroupContainer />
                  ) : (
                    <div className="chatListContainer noHorizontalPadding">
                      {this.props.groups.map((item, index) => {
                        let length =
                          this.props.onlineUsers[item.channel_name].filter(u=>u.username !== this.props.user.ref_id).length || 0;

                        let unreadmsgs =
                          this.props.allRoomsMessages[item.channel_name].filter(
                            (e) => e.send_receipt === false
                          ) || [];
                        let channelMessages =
                          this.props.allRoomsMessages[item.channel_name];
                        let typingchannel =
                          this.props.typingUsers[item.channel_name] || [];

                        return (
                          <div
                            onClick={() => {
                              if (unreadmsgs.length > 0) {
                                unreadmsgs.forEach((e) => {
                                  let receipt = {
                                    messageId: e.id,
                                    receiptType: 3,
                                    from: this.props.user.ref_id,
                                    key: e.key,
                                    to: e.to,
                                    date: new Date().getTime(),
                                  };
                                  console.log("** before sendingreceipt");
                                  this.props.Client.SendReceipt(receipt);
                                  let msgobj = this.props.allRoomsMessages;
                                  let currentmsgsAray =
                                    msgobj[item.channel_name];
                                  let indexx = currentmsgsAray.findIndex(
                                    (a) => a.id == e.id
                                  );

                                  console.log(
                                    "this is message in loop->",
                                    currentmsgsAray[indexx]
                                  );
                                  if (index > -1) {
                                    currentmsgsAray[indexx].send_receipt = true;
                                    msgobj[item.channel_name] = [
                                      ...currentmsgsAray,
                                    ];
                                    this.props.manageAllMessages({ ...msgobj });
                                  }
                                });
                              }
                              this.props.setCurrentChannel(item);
                              if(window.innerWidth<576){
                               document.getElementsByClassName('leftSide')[0].style.display='none'
                               document.getElementsByClassName('rightSide')[0].style.display='block'

                              }
                            }}
                            key={index}
                            // style={{
                            //   backgroundColor:
                            //   this.props.currentChannel &&   this.props.currentChannel.channel_key ===
                            //     item.channel_key
                            //       ? "#F8F8F8"
                            //       : "white",
                            // }}
                            className={`chatsCardContainer ${
                              this.props.currentChannel &&
                              this.props.currentChannel.channel_key ===
                                item.channel_key
                                ? "selectedChat"
                                : ""
                            }`}
                          >
                            <div className="chatsCardLeft">
                              <div className="chatsNameWrap">
                                <h6 className="chatName">
                                  {item.auto_created == 0
                                    ? item.group_title
                                    : item.group_title.includes('-')?item.group_title
                                    .split("-")
                                    .find(
                                      (e) => e !== this.props.user.username
                                    ):item.group_title}
                                </h6>
                                {unreadmsgs.length > 0 && (
                                  <span className="unreadBadge">
                                    {unreadmsgs.length}
                                  </span>
                                )}
                              </div>
                              {typingchannel.length > 0 ? (
                                <p className="typingText">
                                  {typingchannel.length == 1
                                    ? `${
                                        this.props.allUsers.find(
                                          (e) => e.ref_id == typingchannel[0]
                                        ).username
                                      } is Typing...`
                                    : `${
                                        this.props.allUsers.find(
                                          (e) => e.ref_id == typingchannel[0]
                                        ).username
                                      } and ${
                                        typingchannel.length - 1
                                      } others are Typing...`}
                                </p>
                              ) : unreadmsgs.length > 0 ? (
                                <p className="misreadMsg">Misread Messages</p>
                              ) : channelMessages.length > 0 ? (
                                <p className="readMsg">
                                  {channelMessages[channelMessages.length - 1]
                                    .from == this.props.user.ref_id
                                    ? "You: "
                                    : `${
                                        this.props.allUsers.find(
                                          (e) =>
                                            e.ref_id ==
                                            channelMessages[
                                              channelMessages.length - 1
                                            ].from
                                        ).username
                                      }: `}
                                  {channelMessages[channelMessages.length - 1]
                                    .type == "text"
                                    ? channelMessages[
                                        channelMessages.length - 1
                                      ].content
                                    : channelMessages[
                                        channelMessages.length - 1
                                      ].type == "image"
                                    ? "Sent an Image."
                                    : channelMessages[
                                        channelMessages.length - 1
                                      ].type == "audio"
                                    ? "Sent an Audio."
                                    : channelMessages[
                                        channelMessages.length - 1
                                      ].type == "video"
                                    ? "Sent a video."
                                    :
                                    channelMessages[
                                      channelMessages.length - 1
                                    ].type == "file"
                                  ? "Sent a file."
                                    : "other"}
                                </p>
                              ) : (
                                <p className="readMsg">No message yet</p>
                              )}
                            </div>
                            <div className="chatsCardRight">
                              <div
                              onClick={e=>e.stopPropagation()}
                                className="dropdown"
                                style={{ alignSelf: "flex-end" }}
                              >
                                <img src={more} className="moreIcon" />
                                <div className="dropdown-content">
                                  {item.auto_created == 0 && (
                                    <p
                                      onClick={(e) =>{
                                        this.setState({
                                          groupToRename: item,
                                          renameGroupPopup: true,
                                          renameValue: item.group_title,
                                        })
                                        e.stopPropagation()
                                      }
                                      }
                                      className="edit"
                                    >
                                      EDIT GROUP NAME
                                    </p>
                                  )}
                                  <p
                                    onClick={(e) => {this.deleteGroupPopup(item)
                                    e.stopPropagation()
                                    }}
                                    className="delete"
                                  >
                                    DELETE
                                  </p>
                                </div>
                              </div>

                              {item.auto_created == 0 ? (
                                <p className="cardOnlineStatus">
                                  {length+1}/{item.participants.length} Online
                                </p>
                              ) : (
                                <p
                                  className={
                                    length > 0
                                      ? "cardOnlineStatus"
                                      : "cardOfflineStatus"
                                  }
                                >
                                  {length > 0 ? "Online" : "offline"}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
          <div className="leftSideFooter">
            <div
              onClick={() => {
                this.props.reduxlogoutUser();
                this.props.disconnectSDK();
              }}
              className="logoutContainer"
            >
              <img src={logout} className="logoutLogo" />
              <span className="logoutText">
                LOG OUT{" "}
                <span style={{ color: "#0F0F32" }}>
                  {" "}
                  ~{this.props.user.full_name}
                </span>
              </span>
            </div>
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
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxstoreUserInfo: (user) => dispatch(storeUserInfo(user)),
    reduxlogoutUser: () => dispatch(logoutUser()),
    setGroups: (groups) => dispatch(storeGroups(groups)),
    setCurrentChannel: (channel) => dispatch(selectCurrentChannel(channel)),
    storeAllUsers: (users) => dispatch(storeAllUsers(users)),
    manageTypingUsers: (obj) => dispatch(manageTypingUsers(obj)),

    manageOnlineUsers: (obj) => dispatch(manageOnlineUsers(obj)),
    manageAllMessages: (messagesObj) =>
      dispatch(manageAllMessages(messagesObj)),
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
    typingUsers: state.group.typingUsers,
    allUsers: state.group.allUsers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

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
