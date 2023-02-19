import React, { useState, useEffect } from "react";

const ChatFooter = ({ socket, currentUserLogged }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    socket.emit("message", {
      text: message,
      name: currentUserLogged.name,
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    });

    console.log(currentUserLogged.name);
    setMessage("");
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
