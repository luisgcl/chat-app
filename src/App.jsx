import { useState } from "react";
import Chat from "./components/Chat";
import SendMessage from "./components/SendMessage";
import User from "./components/User";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);
  return (
    <>
      <div className=" pt-32 flex-col sm:flex-row lg:columns-2 flex justify-center lg:pt-10 gap-5 h-screen">
        <div className=" w-full sm:w-1/5">
          <User />
        </div>
        <div className="w-full sm:w-3/5 h-5/6 bg-gray-300 rounded-2xl">
          <Chat messages={messages} setMessages={setMessages} />
          {user && <SendMessage messages={messages} />}
        </div>
      </div>
    </>
  );
}

export default App;
