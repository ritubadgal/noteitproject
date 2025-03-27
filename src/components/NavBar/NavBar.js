import "./style.css";
import { useNavigate } from "react-router-dom";
import { LuNotebookPen } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
function NavBar() {
  const navigate=useNavigate();
  const links=[
    {title:"Home",path:"/home"},
    {title:"About us",path:"/about"},
    {title:"Services",path:"/services"},
    // {title:"Content",path:"/content"},
  ];
  return (
    <div className="NavBarBaseContainer">
      <div className="NavBarLogoContainer">
      <LuNotebookPen
      className="NavBarIcon"
      size={30}
      />
      </div>
      <div className="NavBarLinkContainer">
        {links.map((item)=>{
          return<p onClick={()=>navigate(item.path)}>{item.title}</p>
        }
        )}
      </div>
      <div className="NavBarProfileContainer">
      <FaUserCircle  size={30}/>
      </div>
    </div>
  );
}

export default NavBar;
