import React,{useState} from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import file from "../assets/images/file.png";
import ImageViewer from "react-simple-image-viewer";

const MessageBubble = (props) => {
  const [currentImage, setCurrentImage] = useState('');
  return (
    <>
    <div
      className={
        props.item.from == props.user.ref_id
          ? "senderChatContainer"
          : "receiverChatContainer"
      }
    >
      {props.index == 0 && (
        <h4 className="msgBy">
          {props.item.from == props.user.ref_id
            ? "You"
            : props.allUsers.find((e) => e.ref_id == props.item.from).username}
        </h4>
      )}

      {props.index > 0 &&
        props.item.from !== props.currentmsgs[props.index - 1].from && (
          <h4 className="msgBy">
            {props.item.from == props.user.ref_id
              ? "You"
              : props.allUsers.find((e) => e.ref_id == props.item.from)
                  .username}
          </h4>
        )}
      <div className="bubbleContainer">
        {props.item.from == props.user.ref_id &&
          props.sendingQueue.findIndex((e) => e == props.item.id) > -1 && (
            <span style={{ margin: 10 }}>
              <Loader type="Watch" color="black" height={20} width={20} />
            </span>
          )}
        {props.item.type === "text" ? (
          <div className="bubble">
            <p className="msgText">{props.item.content}</p>
          </div>
        ) : props.item.type === "image" ? (
          <div
            //   style={{backgroundColor:props.item.from == props.user.ref_id?"white":'#4E9D93'}}

            className="imgbubble"
          >
            {props.item.loading ? (
              <div
                style={{
                  height: 200,
                  width: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Loader
                  type="Oval"
                  color={
                    props.item.from == props.user.ref_id ? "#4E9D93" : "white"
                  }
                  height={60}
                  width={60}
                />
                <p
                  style={{
                    color:
                      props.item.from == props.user.ref_id
                        ? "#4E9D93"
                        : "white",
                  }}
                >
                  {props.item.from == props.user.ref_id
                    ? "Sending Image..."
                    : "Downloading Image..."}
                </p>
              </div>
            ) : (
              <img
              onClick={()=>setCurrentImage(props.item.id)}
                //   style={{backgroundColor:props.item.from == props.user.ref_id?"white":'#4E9D93'}}
                src={props.filesObject[props.item.id]}
                className="msgImage img-thumbnail img-fluid"
              />
            )}
          </div>
        ) : props.item.type === "audio" ? (
          <div className="imgbubble">
            {props.item.loading ? (
              <div
                style={{
                  height: 60,
                  width: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Loader
                  type="Oval"
                  color={
                    props.item.from == props.user.ref_id ? "#4E9D93" : "white"
                  }
                  height={40}
                  width={40}
                />
                <p
                  style={{
                    color:
                      props.item.from == props.user.ref_id
                        ? "#4E9D93"
                        : "white",
                  }}
                >
                  {props.item.from == props.user.ref_id
                    ? "Sending Audio..."
                    : "Downloading Audio..."}
                </p>
              </div>
            ) : (
              <audio
                style={{
                  backgroundColor:
                    props.item.from == props.user.ref_id ? "white" : "#4E9D93",
                }}
                controls
              >
                <source
                  src={props.filesObject[props.item.id]}
                  type="audio/ogg"
                ></source>
              </audio>
            )}
          </div>
        ) : props.item.type === "video" ? (
          <div className="imgbubble">
            {props.item.loading ? (
              <div
                style={{
                  height: 200,
                  width: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Loader
                  type="Oval"
                  color={
                    props.item.from == props.user.ref_id ? "#4E9D93" : "white"
                  }
                  height={60}
                  width={60}
                />
                <p
                  style={{
                    color:
                      props.item.from == props.user.ref_id
                        ? "#4E9D93"
                        : "white",
                  }}
                >
                  {props.item.from == props.user.ref_id
                    ? "Sending Video..."
                    : "Downloading Video..."}
                </p>
              </div>
            ) : (
              <video
                style={{
                  backgroundColor:
                    props.item.from == props.user.ref_id ? "white" : "#4E9D93",
                  width: "100%",
                  maxHeight:400
                }}
                controls
              >
                <source src={props.filesObject[props.item.id]}></source>
              </video>
            )}
          </div>
        ) : props.item.type === "file" ? (
          <div
            onClick={() => {
              let content = props.filesObject[props.item.id];
              if (
                content.includes("text/plain") ||
                content.includes("/pdf") ||
                content.includes("/json")
              ) {
                var string = content;
                var iframe =
                  "<iframe width='100%' height='100%' src='" +
                  string +
                  "'></iframe>";
                var x = window.open();
                x.document.open();
                x.document.write(iframe);
                // x.document.close();
              } else {
                window.open(content);
              }
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
            className="imgbubble"
          >
            {props.item.loading ? (
              <div
                style={{
                  height: 80,
                  width: 150,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Loader
                  type="Oval"
                  color={
                    props.item.from == props.user.ref_id ? "#4E9D93" : "white"
                  }
                  height={50}
                  width={50}
                />
                <p
                  style={{
                    color:
                      props.item.from == props.user.ref_id
                        ? "#4E9D93"
                        : "white",
                        // maxWidth:300
                  }}
                >
                  {props.item.from == props.user.ref_id
                    ? "Sending file..."
                    : "Downloading file..."}
                </p>
              </div>
            ) : (
              // <p style={{textDecoration:'underline'}} className="msgText">{props.item.filename}</p>
              <>
                <img
                    style={{height:60,width:60,objectFit:'contain'}}
                  // src={props.filesObject[props.item.id]}
                  src={file}
                  className="msgImage img-thumbnail img-fluid"
                />
                <p
                  style={{
                    textDecoration: "underline",
                    textAlign: "center",
                    cursor: "pointer",
                    maxWidth: "100%",
                  }}
                  className="msgText"
                >
                  Download File
                </p>
              </>
            )}
          </div>
        ) : null}
        <span className="time">
          {props.item.from == props.user.ref_id && (
            <>
              <span>Read {props.item.seen_by.length}</span>
              <br />
            </>
          )}
          <span>{new Date(props.item.date).toLocaleTimeString()}</span>
        </span>
      </div>
    
    </div>
    {currentImage && (
        <ImageViewer
          src={[`${props.filesObject[currentImage]}`]}
          currentIndex={0}
          onClose={()=>setCurrentImage('')}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    currentChannel: state.group.currentChannel,
    allRoomsMessages: state.group.allRoomsMessages,
    sendingQueue: state.group.sendingQueue,
    allUsers: state.group.allUsers,
    filesObject: state.group.filesObject,
  };
};

export default connect(mapStateToProps, null)(MessageBubble);

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
