import { useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import EmojiPicker from "emoji-picker-react";

const SendMessage = ({ messages }) => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState("close");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (auth.currentUser === null) {
      console.log("no existe");
    } else {
      const { uid, displayName, photoURL } = auth.currentUser;

      await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        photo: photoURL,
        timestamp: serverTimestamp(),
      });
    }
    setInput("");
    setOpen("close");
  };

  const emoji = () => setOpen("open");
  const closeEmoji = () => setOpen("close");

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject);
    setInput(`${input}${emojiObject.emoji}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between gap-2">
        <div className={`emoji-panel2 ${open}`}>
          <div className="w-full flex justify-end">
            <button
              type="button"
              className="bg-red-500 px-1 rounded-md flex justify-end"
              onClick={closeEmoji}
            >
              <i className="fa-solid fa-x text-xs"></i>
            </button>
          </div>
          <EmojiPicker
            height={250}
            searchDisabled={true}
            emojiStyle={"facebook"}
            onEmojiClick={onEmojiClick}
          />
        </div>
        <button type="button" className="p-2" onClick={emoji}>
          <i className="fa-solid fa-face-smile text-2xl"></i>
        </button>
        <div className="w-full h-16 rounded-2xl">
          <input
            className="w-full h-16 rounded-2xl"
            type="text"
            placeholder="Enviar mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border-2 p-2 mr-2 bg-gray-400 rounded-xl"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
export default SendMessage;
