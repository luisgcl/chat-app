import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <div>
      <button onClick={googleLogin}>
        <i className="fa-brands fa-google"></i>Sign in with Google
      </button>
    </div>
  );
};
export default Login;
