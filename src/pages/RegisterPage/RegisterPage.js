import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/COLOR.js";
import "./style.css";
function RegisterPage() {
  return (
    <div className="RegisterPageBaseContainer">
      <h1>Register Page</h1>
      <div className="RegisterPageContentBaseContainer">
        <div className="RegisterPageImageContainer">image</div>
        <div className="RegisterPageBaseContentContainer">
            <h1>sign-up</h1>
          <div className="RegisterPageContentTableContainer">
            <table>
              <tr>
                <td>
                  <div className="RegisterPageInputContainer">Username:</div>
                </td>
                <td>
                  <input type="text" placeholder="Name" />
                </td>
              </tr>
              <tr>
                <td>
                    <div className="">E-mail:</div>
                </td>
                <td>
                    <input type="text" placeholder="email"/>
                </td>
              </tr>
              <tr>
                <td>
                    <div>Password:</div>
                </td>
                <td>
                    <input type="password" placeholder="password"/>
                </td>
              </tr>
              <tr>
                <td>
                    <div>Confirm Password:</div>
                </td>
                <td>
                   <input type="password" placeholder="confirm password"/>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
