import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div>
      <button
        className="flex justify-between items-center gap-1 bg-green-500 p-2 rounded-lg"
        onClick={googleLogin}
      >
        <i className="fa-brands fa-google"></i>Sign in with Google
      </button>
    </div>
  );
};
export default Login;
