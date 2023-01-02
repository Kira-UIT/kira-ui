import { UserLogo } from "constants/media";
import { BiLogOut } from "react-icons/bi";
import { TbBrandKickstarter } from "react-icons/tb";
import "./Sidebar.css";
import Navbar from "./components/Navbar/Navbar";
import { navLinks } from "constants/navLinks";

type SidebarType = {
  collapsed?: boolean;
};

const Sidebar = ({ collapsed }: SidebarType) => {
  return (
    <div className={`sidebar${collapsed ? " close" : ""}`}>
      <div className="logo-details">
        <TbBrandKickstarter />
        <span className="logo-name">Kira UI</span>
      </div>
      <Navbar navLinks={navLinks} />
      <div className="profile-details">
        <div className="profile-content">
          <img src={UserLogo} alt="" />
        </div>
        <div className="name-job">
          <div className="profile-name">Kira</div>
          <div className="job">Fullstack Developer</div>
        </div>
        <div className="nav-links__icon">
          <BiLogOut />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
