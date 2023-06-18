import { auth } from "../firebase";

const Message = ({ message }) => {
  let newStyle = "message";
  let parrafo = "parrafo";
  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    const newUser = message.uid;
    newStyle = user === newUser ? "my-message" : "message";
    parrafo = user === newUser ? "parrafo" : "parrafo2";
  }
  return (
    <div className={newStyle}>
      <p className={parrafo}>{message.text}</p>
    </div>
  );
};
export default Message;
