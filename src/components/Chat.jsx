import { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import Message from "./Message";

const Chat = ({ messages, setMessages }) => {
  const chatRef = useRef(null);
  useEffect(() => {
    const newQuery = query(
      collection(db, "messages"),
      orderBy("timestamp", "desc"),
      limit(20)
    );

    const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
      let currentMessages = [];
      querySnapshot.forEach((item) => {
        currentMessages.unshift({ content: item.data(), id: item.id });
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
        if (chatRef.current && chatRef.current.lastChild) {
          chatRef.current.lastChild.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }
      });
      setMessages(currentMessages);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="bg-gray-200 m-5 h-4/5 overflow-y-auto" ref={chatRef}>
      {messages &&
        messages.map((item) => (
          <Message key={item.id} message={item.content} />
        ))}
    </div>
  );
};
export default Chat;
