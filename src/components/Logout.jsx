import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Logout = () => {
  const logAuth = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={logAuth}>
        <i className="fa-brands fa-google"></i>Sign Out
      </button>
    </div>
  );
};
export default Logout;
