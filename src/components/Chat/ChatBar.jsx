import React from "react";

const ChatBar = ({ userFriends }) => {
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {userFriends.map((user) => {
            return <p>{user.firstname}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
