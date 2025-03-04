import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/COLOR.js";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("@gmail.com");
  return (
    <div className="loginPageBaseContainer">
      {/* <h1 className="h1">NoteIt</h1> */}
      <div className="loginPageImageContainer"></div>
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>NoteIt</h1>

          <h3>login </h3>
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
          />
        </div>
        <div className="loginPageContentButtonContainer"></div>
        <div className="loginPageContentRegisterContainer">
          <button>login</button>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
