import ASSETS from "../../assets/images";
import "./style.css";
function NavBar() {
  return (
    <div className="NavBarBaseContainer">
      <div className="NavBarElement">Home</div>
      <div className="NavBarElement">Services</div>
      <div className="NavBarElement">Content</div>
      <div className="NavBarElement">About</div>
      <div className="NavBarElement">Profile</div>
    </div>
  );
}
export default NavBar;
