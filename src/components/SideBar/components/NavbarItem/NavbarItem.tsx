import { INavbar } from "models/type";
import { Fragment, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import SubMenu from "../SubMenu/SubMenu";

type NavbarItemProps = {
  navLink: INavbar;
};

const NavbarItem = ({ navLink }: NavbarItemProps) => {
  const navbarItemRef = useRef<HTMLLIElement>(null);
  const showSubMenu = () => {
    navbarItemRef.current?.classList.toggle("active");
  };

  return (
    <li ref={navbarItemRef}>
      {navLink.children ? (
        <Fragment>
          <div className="nav-links__icon-link">
            <a href={navLink.path}>
              <span className="nav-links__icon">{navLink.icon}</span>
              <span className="nav-links__name">{navLink.name}</span>
            </a>
            <span className="nav-links__icon arrow" onClick={showSubMenu}>
              <BiChevronDown />
            </span>
          </div>
          <SubMenu navLink={navLink} />
        </Fragment>
      ) : (
        <>
          <a href={navLink.path}>
            <span className="nav-links__icon">{navLink.icon}</span>
            <span className="nav-links__name">{navLink.name}</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a href={navLink.path} className="link-name">
                {navLink.name}
              </a>
            </li>
          </ul>
        </>
      )}
    </li>
  );
};

export default NavbarItem;
