import { INavbar } from "models/type";
import {
  BiBookAlt,
  BiCog,
  BiCollection,
  BiCompass,
  BiGridAlt,
  BiHistory,
  BiLineChart,
  BiPieChartAlt2,
  BiPlug,
} from "react-icons/bi";

const navLinks: INavbar[] = [
  {
    name: "Dashboard",
    path: "#",
    icon: <BiGridAlt />,
  },
  {
    name: "Category",
    path: "#",
    icon: <BiCollection />,
    children: [
      {
        name: "Web Design",
        path: "#",
      },
      {
        name: "Login Form",
        path: "#",
      },
      {
        name: "Card Design",
        path: "#",
      },
    ],
  },
  {
    name: "Posts",
    path: "#",
    icon: <BiBookAlt />,
    children: [
      {
        name: "HTML & CSS",
        path: "#",
      },
      {
        name: "Javascript",
        path: "#",
      },
      {
        name: "PHP & MySQL",
        path: "#",
      },
    ],
  },
  {
    name: "Analytics",
    path: "#",
    icon: <BiPieChartAlt2 />,
  },
  {
    name: "Chart",
    path: "#",
    icon: <BiLineChart />,
  },
  {
    name: "Plugins",
    path: "#",
    icon: <BiPlug />,
    children: [
      {
        name: "UI Face",
        path: "#",
      },
      {
        name: "Pigments",
        path: "#",
      },
      {
        name: "Box Icons",
        path: "#",
      },
      {
        name: "Ant Design",
        path: "#",
      },
    ],
  },
  {
    name: "Explore",
    path: "#",
    icon: <BiCompass />,
  },
  {
    name: "History",
    path: "#",
    icon: <BiHistory />,
  },
  {
    name: "Settings",
    path: "#",
    icon: <BiCog />,
  },
];

export { navLinks };
