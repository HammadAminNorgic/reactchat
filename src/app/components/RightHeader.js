import React, { Component } from "react";
import videoCall from "../assets/images/video-call.png";
import call from "../assets/images/call.png";
import arrowLeft from "../assets/images/arrow-left.png";

import { connect } from "react-redux";
import { selectCurrentChannel } from "../redux/groups/actions";

class RightHeader extends Component {
  render() {
    console.log("current channel=>", this.props.currentChannel);
    let typingchannel =
      (this.props.currentChannel &&
        this.props.typingUsers[this.props.currentChannel.channel_name]) ||
      [];
    return (
      <div className="rightSideHeader alignBottom">
        {this.props.currentChannel && (
          <>
            {" "}
            <div>
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  onClick={() => {
                    if (window.innerWidth < 576) {
                      document.getElementsByClassName(
                        "leftSide"
                      )[0].style.display = "block";
                      document.getElementsByClassName(
                        "rightSide"
                      )[0].style.display = "none";
                      this.props.setCurrentChannel(null);
                    }
                  }}
                  className="leftArrowBack"
                  src={arrowLeft}
                />
                <h4 className="roomNameText">
                  {this.props.currentChannel.auto_created == 0
                    ? this.props.currentChannel.group_title
                    : this.props.currentChannel.group_title.includes("-")
                    ? this.props.currentChannel.group_title
                        .split("-")
                        .find((e) => e !== this.props.user.username)
                    : this.props.currentChannel.group_title}
                </h4>
              </span>
              {typingchannel.length > 0 && (
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
                      } and ${typingchannel.length - 1} other are Typing...`}
                </p>
              )}
            </div>
            <div>
              <button
                style={{ marginRight: 15 }}
                type="submit"
                className="btn callButton"
              >
                <img src={call} className="callIcon" />
              </button>
              <button type="submit" className="btn broadcastButton">
                <img src={videoCall} className="callIcon" />
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChannel: (channel) => dispatch(selectCurrentChannel(channel)),

    // reduxstoreUserInfo: (user) => dispatch(storeUserInfo(user)),
    // reduxlogoutUser: () => dispatch(logoutUser()),
    // setGroups: (groups) => dispatch(storeGroups(groups)),
  };
};
const mapStateToProps = (state) => {
  console.log("redux state==>", state);
  return {
    user: state.user.user,
    groups: state.group.groups,
    currentChannel: state.group.currentChannel,
    typingUsers: state.group.typingUsers,
    allUsers: state.group.allUsers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightHeader);

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
