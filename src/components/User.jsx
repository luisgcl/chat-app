import Login from "./Login";
import Logout from "./Logout";
import userImage from "../assets/user.jpg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const User = () => {
  const [user] = useAuthState(auth);
  const image = user ? user.photoURL : userImage;
  const name = user ? user.displayName : "Name User";

  return (
    <>
      <div className=" flex justify-center gap-2">
        <p className=" mb-4 text-2xl font-bold">Chat Friendly</p>
        <i className="fa-solid fa-comment text-2xl"></i>
      </div>
      <div className="flex justify-center items-center rounded-2xl bg-gray-300 h-64">
        <div className="">
          <img
            className="rounded-full h-32 mx-auto"
            src={image}
            alt="user photo"
            referrerPolicy="no-referrer"
          />
          <p className="text-center font-bold">{name}</p>
          <div className="flex justify-center items-center">
            {user ? <Logout /> : <Login />}
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
