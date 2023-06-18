import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newQuery = query(collection(db, "messages"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
      let currentMessages = [];
      querySnapshot.forEach((item) => {
        currentMessages.push({ content: item.data(), id: item.id });
      });
      setMessages(currentMessages);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="bg-red-400 m-5">
      {messages &&
        messages.map((item) => (
          <Message key={item.id} message={item.content} />
        ))}
      <SendMessage />
    </div>
  );
};
export default Chat;
