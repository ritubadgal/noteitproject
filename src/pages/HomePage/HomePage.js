import ASSETS from "../../assets/images";
import NavBar from "../NavBar/NavBar";
import "./style.css";

function HomePage() {
  return (
    <div
      className="homePageBaseContainer"
      style={{ backgroundImage: `url(${ASSETS.backgroundImgNavBar})` }}
    >
      <h2 className="HomePageHeading">Welcome write your NOTES here!</h2>
      <div className="navbarBaseContainer">
        <NavBar />
      </div>
      <div className="homePageContentBaseContainer"></div>
    </div>
  );
}
export default HomePage;
