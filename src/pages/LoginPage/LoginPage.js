import { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/COLOR.js";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import { auth } from "../../Firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("@gmail.com");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user.uid) {
        localStorage.setItem("uid", userCredential.user.uid);
        navigate("/home");
      } else {
        alert("Error In Login");
      }
    } catch (error) {
      alert("login failed" + error.message);
    }
  };

  return (
    <div className="loginPageBaseContainer">
      <h1 className="h1">NoteIt</h1>

      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>Welcome</h1>

          <h3>login here!</h3>
        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput
            type={"email"}
            placeholder={"Enter  email"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e) => {
              setEmail(e.target.value);
            }}
          />
          <CustomInput
            type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            isSecureEntry={true}
            inputValue={password}
            onChangeText={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* <div className="forgot">
          <a href="#">Forgot Password</a>
        </div> */}
        <div className="flex2">
          <CustomButton title="login" onClick={handleLogin} />
        </div>
        <div className="flex2">
          <h4>
            Don't have an account?<a href="register"> Sign up </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
