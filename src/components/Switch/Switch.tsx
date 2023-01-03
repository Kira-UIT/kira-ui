import { useState } from "react";
import { BiLock, BiLockOpen } from "react-icons/bi";
import "./Switch.css";

type SwitchProps = {
  size?: "small" | "large" | "default";
};

const Switch = ({ size = "default" }: SwitchProps) => {
  const [active, setActive] = useState(false);
  const handleSwitch = () => {
    setActive(!active);
  };
  return (
    <div
      className={`toggle-btn${active ? " active" : ""}${
        size === "small"
          ? " small-switch"
          : size === "large"
          ? " large-switch"
          : ""
      }`}
      onClick={handleSwitch}
    >
      <div className="icon">{active ? <BiLock /> : <BiLockOpen />}</div>
    </div>
  );
};

export default Switch;
