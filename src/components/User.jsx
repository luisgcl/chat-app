import Login from "./Login";
import Logout from "./Logout";
import userImage from "../assets/user.jpg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const User = () => {
  const [user] = useAuthState(auth);
  const image = user ? user.photoURL : userImage;
  const name = user ? user.displayName : "Name User";
  console.log(user);
  return (
    <>
      <p className="text-center mb-4">Quick Chat</p>
      <div className="flex justify-center items-center rounded-2xl bg-gray-300 h-64">
        <div>
          <img
            className="rounded-full"
            src={image}
            alt="user photo"
            referrerPolicy="no-referrer"
          />
          <p>{name}</p>
          {user ? <Logout /> : <Login />}
        </div>
      </div>
    </>
  );
};
export default User;
