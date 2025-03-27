import ASSETS from "../../assets/images";
import "./style.css";
import NavBar from "../../components/NavBar/NavBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function HomePage() {
  const[name, setName]=useState("");
  const navigate=useNavigate();
  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (!uid) {
      navigate("/login");
    }
  }, []);
  return (
    <div
      className="homePageBaseContainer"
      style={{ backgroundImage: `url(${ASSETS.backgroundImgNavBar})` }}
    >
      <div className="navbarBaseContainer">
        <NavBar />
      </div>
      <div className="homePageContentBaseContainer">
        <Outlet />
      </div>
    </div>
  );
}
export default HomePage;
