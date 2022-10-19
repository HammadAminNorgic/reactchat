import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import img from "../assets/images/image.png";
import ConvoTemplate from "./ConvoTemplate";
import MessageBubble from "./MessageBubble";

class MessagesContainer extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: "auto" });
  }
  render() {
    let currentmsgs =
      this.props.allRoomsMessages[this.props.currentChannel.channel_name];
    return (
      <div style={{ height: "100%" }}>
        {currentmsgs.length === 0 ? (
          <ConvoTemplate noMessage />
        ) : (
          <>
            {currentmsgs.map((item, index) => {
              return (
                <MessageBubble
                currentmsgs={currentmsgs}
                  item={item}
                  key={item.id}
                  index={index}
                />
              );
            })}
          </>
        )}
        {/*  */}
        <div
          ref={(el) => {
            this.el = el;
          }}
        ></div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setCurrentChannel: (channel) => dispatch(selectCurrentChannel(channel)),
//     manageAllMessages: (messagesObj) =>
//       dispatch(manageAllMessages(messagesObj)),
//     manageSendingQueue: (queueArray) =>
//       dispatch(manageSendingQueue(queueArray)),
//   };
// };
const mapStateToProps = (state) => {
  console.log("redux state==>", state);
  return {
    user: state.user.user,
    currentChannel: state.group.currentChannel,
    allRoomsMessages: state.group.allRoomsMessages,
    sendingQueue: state.group.sendingQueue,
    allUsers: state.group.allUsers,
  };
};

export default connect(mapStateToProps, null)(MessagesContainer);

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
