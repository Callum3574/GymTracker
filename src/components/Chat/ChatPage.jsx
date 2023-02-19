import React, { useState, useEffect } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import checkUser from "../Auth/CheckUser";
import { useAuth } from "../Contexts/AuthContext.jsx";

const ChatPage = ({ socket }) => {
  const [currentUserLogged, setCurrentUserLogged] = useState("");
  const [messages, setMessages] = useState("");
  const { currentUser } = useAuth();

  useEffect(() => {
    const user = currentUser;
    const findingCurrentUser = async () => {
      const loggedInUser = await checkUser(user);
      setCurrentUserLogged(loggedInUser);
    };

    if (user) {
      findingCurrentUser();
    }
  }, []);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody
          currentUserLogged={currentUserLogged}
          socket={socket}
          messages={messages}
        />
        <ChatFooter currentUserLogged={currentUserLogged} socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
