import { INavbar } from "models/type";
import NavbarItem from "../NavbarItem/NavbarItem";

type NavbarProps = {
  navLinks: INavbar[];
};

const Navbar = ({ navLinks }: NavbarProps) => {
  return (
    <ul className="nav-links">
      {navLinks.map((navLink, index) => (
        <NavbarItem navLink={navLink} key={index} />
      ))}
    </ul>
  );
};

export default Navbar;
