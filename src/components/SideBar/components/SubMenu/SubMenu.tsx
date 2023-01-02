import { INavbar } from "models/type";
import { forwardRef } from "react";

type SubMenuProps = {
  navLink: INavbar;
};

const SubMenu = forwardRef(
  ({ navLink }: SubMenuProps, ref: React.Ref<HTMLUListElement> | null) => {
    return (
      <ul className="sub-menu" ref={ref}>
        <li>
          <a href={navLink.path} className="link-name">
            {navLink.name}
          </a>
        </li>
        {navLink?.children
          ? navLink?.children.map((item, index) => (
              <li key={index}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))
          : null}
      </ul>
    );
  }
);

export default SubMenu;
