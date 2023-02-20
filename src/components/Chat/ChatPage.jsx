import React, { useState, useEffect } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import checkUser from "../Auth/CheckUser";
import { useAuth } from "../Contexts/AuthContext.jsx";

const ChatPage = ({ socket }) => {
  const [currentUserLogged, setCurrentUserLogged] = useState("");
  const [messages, setMessages] = useState("");
  const [userFriends, setUserFriends] = useState([]);
  const { currentUser } = useAuth();

  const fetchFriends = async () => {
    const res = await fetch("http://localhost:4000/all_users");
    const data = await res.json();
    return data.data;
  };

  useEffect(() => {
    const user = currentUser;
    const findingCurrentUser = async () => {
      const loggedInUser = await checkUser(user);
      setCurrentUserLogged(loggedInUser);
    };

    if (user) {
      findingCurrentUser();
    }
    const fetchAllUsers = async () => {
      const allUsers = await fetchFriends();
      const removeCurrentUser = allUsers.filter((users) => {
        console.log(user.uid);
        return users.user_id !== user.uid;
      });
      setUserFriends(removeCurrentUser);
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <ChatBar
        currentUserLogged={currentUserLogged}
        userFriends={userFriends}
      />
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
