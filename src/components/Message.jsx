import { auth } from "../firebase";
import { formatDate } from "../helpers/formatDate";

const Message = ({ message }) => {
  let newStyle = "message";
  let parrafo = "parrafo";
  if (auth.currentUser) {
    const user = auth.currentUser.uid;
    const newUser = message.uid;
    newStyle = user === newUser ? "my-message" : "message";
    parrafo = user === newUser ? "parrafo" : "parrafo2";
  } else {
    parrafo = "parrafo2";
  }
  return (
    <>
      <div className={`gap-2 ${newStyle}`}>
        <img
          className="rounded-full h-12"
          src={message.photo}
          alt={message.name}
          referrerPolicy="no-referrer"
        />
        <div className="">
          <p>{message.name}</p>
          <div className="max-w-[600px] flex">
            <p className={`  ${parrafo}`}>{message.text}</p>
          </div>
          <p className="flex justify-end m-1">
            {formatDate(message.timestamp)}
          </p>
        </div>
      </div>
    </>
  );
};
export default Message;
