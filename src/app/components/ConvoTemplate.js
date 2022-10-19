import React from "react";
import { connect } from "react-redux";
import shipping from "../assets/images/shipping.png";
import { selectCurrentChannel } from "../redux/groups/actions";

const ConvoTemplate = (props) => {
  console.log("props on convo==>", props);
  return (
    <div style={styles.container}>
      {props.noSelectedConvo && (
        <div className="chatRoomContainer">
          {/* <div style="height: 100%" className="listingContainer"> */}

          <div className="emptyListContainer">
            <div className="emptyListTop">
              {/* <div></div> */}
              <div></div>

              <img src={shipping} className="shippingIcon" />
              <div className="noConvoTextWrapper">
                <p className="noConvoText">
                  Select Any Conversation To Continue..
                </p>
                <p style={{ maxWidth: 200 }} className="noConvoSub">
                  Tap and hold on any message to star it, so you can easily find
                  it later.
                </p>
              </div>
              <div></div>
            </div>
            {/* <div className="emptyListBottom">
                  <button type="submit" className="btn newChatButton">
                    NEW CHAT
                  </button>
                  <button type="submit" className="btn refreshButton">
                    REFRESH
                  </button>
                </div> */}
          </div>

          {/* </div> */}
        </div>
      )}
      {props.noChat && (
        <div className="chatRoomContainer">
          {/* <div style="height: 100%" className="listingContainer"> */}

          <div className="emptyListContainer">
            <div className="emptyListTop">
              {/* <div></div> */}
              <div></div>

              <img src={shipping} className="shippingIcon" />
              <div className="noConvoTextWrapper">
                <p className="noConvoText">No Conversation Yet</p>
                <p style={{ maxWidth: 200 }} className="noConvoSub">
                  Tap and hold on any message to star it, so you can easily find
                  it later.
                </p>
              </div>
              <div></div>
            </div>
            {/* <div className="emptyListBottom">
                  <button type="submit" className="btn newChatButton">
                    NEW CHAT
                  </button>
                  <button type="submit" className="btn refreshButton">
                    REFRESH
                  </button>
                </div> */}
          </div>

          {/* </div> */}
        </div>
      )}
      {props.noMessage && (
        <div className="emptyListContainer fitt">
          <div className="emptyListTop">
            {/* <div></div> */}
            <div></div>

            {/* <img src={shipping} className="shippingIcon" /> */}
            <div className="noConvoTextWrapper">
              <p className="noConvoText">No Messages Yet</p>
              <p style={{ maxWidth: 200 }} className="noConvoSub">
                Send message to start conversation.
              </p>
           
            </div>
            <div></div>
          </div>
          {/* <div className="emptyListBottom">
                    <button type="submit" className="btn newChatButton">
                      NEW CHAT
                    </button>
                    <button type="submit" className="btn refreshButton">
                      REFRESH
                    </button>
                  </div> */}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("redux state==>", state);
  return {
    user: state.user.user,
    groups: state.group.groups,
    currentChannel: state.group.currentChannel,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChannel: (channel) => dispatch(selectCurrentChannel(channel)),

    // reduxstoreUserInfo: (user) => dispatch(storeUserInfo(user)),
    // reduxlogoutUser: () => dispatch(logoutUser()),
    // setGroups: (groups) => dispatch(storeGroups(groups)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConvoTemplate);

const styles = {
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  text: {
    color: "white",
  },
};
