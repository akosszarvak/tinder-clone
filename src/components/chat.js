import React from "react";
import "../assets/css/chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Chat(props) {
  return (
    <Link to={`/chat/${props.name}`}>
      <div className="chat">
        <Avatar className="chat-image" src={props.profilePic} />
        <div className="chat-details">
          <h2>{props.name}</h2>
          <p>{props.message}</p>
        </div>
        <p className="chat-timestamp">{props.timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
