import React, { useState } from "react";
import "../assets/css/chat-screen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen(props) {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://profile-images.xing.com/images/8a5c3a56f55741fabf8911d38469b737-5/nicole-distler.1024x1024.jpg",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image:
        "https://profile-images.xing.com/images/8a5c3a56f55741fabf8911d38469b737-5/nicole-distler.1024x1024.jpg",
      message: "Hows it going",
    },
    {
      message: "Hi! How are you Ellen",
    },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen-timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen-message">
            <Avatar
              className="chat-image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen-text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen-message">
            <p className="chatScreen-textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
