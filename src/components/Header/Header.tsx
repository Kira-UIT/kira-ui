import { BiMenu } from "react-icons/bi";
import "./Header.css";

type HeaderProps = {
  onCollapse: () => void;
};

const Header = ({ onCollapse }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-container">
        <BiMenu className="menu-icon" onClick={onCollapse} />
        {/* <span className="text">Header</span> */}
      </div>
    </div>
  );
};

export default Header;
