import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton.js";
import COLOR from "../../config/COLOR.js";
import "./style.css";
import { auth, database } from "../../Firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { set, ref } from "firebase/database";
function RegisterPage() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonText, setButtonText] = useState("Register");
  const navigate = useNavigate();
  const saveUserDetails = (data) => {
    set(ref(database, `users/${data.uid}`), data);
    navigate("/");
  };
  const handleRegister = async () => {
    try {
      if (
        email == "" ||
        password == "" ||
        confirmPassword == "" ||
        Name == ""
      ) {
        alert("Please fill the fields");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else if (password != confirmPassword) {
        alert("Password is not matching");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setButtonText("Please wait");
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
          confirmPassword
        );
        setButtonText("Register");
        if (response.user.uid) {
          const userData = {
            uid: response.user.uid,
            email: response.user.email,
            name: Name,
          };
          saveUserDetails(userData);
          navigate("/");
        } else {
          alert("Failed to register");
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      }
    } catch (err) {
      setButtonText("Register");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert(err);
    }
  };

  return (
    <div className="RegisterPageBaseContainer">
      <div className="RegisterPageContentBaseContainer">
        <div className="RegisterPageImageContainer">
          <img src={require("../../assets/images/registerpage.png")}></img>
        </div>
        <div className="RegisterPageBaseContentContainer">
          <h1>Register Here!</h1>
          <h3>sign-up</h3>
          <div className="RegisterPageContentTableContainer">
            <table>
              <tr>
                <td>
                  <div className="RegisterPageInputContainer">Username:</div>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="">E-mail:</div>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div>Password:</div>
                </td>
                <td>
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div>Confirm Password:</div>
                </td>
                <td>
                  <input
                    type="confirmPassword"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    isSecureEntry={true}
                  />
                </td>
              </tr>
            </table>
            
          </div>

          <div className="RegisterPageButtonContainer">
            <button onClick={handleRegister}>Register</button>
            <h4>already have an account ?  <a href="login"> Sign in</a></h4>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default RegisterPage;
