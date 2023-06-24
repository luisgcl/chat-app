import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Logout = () => {
  const logAuth = () => {
    signOut(auth);
  };
  return (
    <div className="">
      <button
        className="flex justify-between items-center gap-1 bg-gray-400 p-2 rounded-lg"
        onClick={logAuth}
      >
        <i className="fa-brands fa-google"></i>
        <p>Sign Out</p>
      </button>
    </div>
  );
};
export default Logout;
