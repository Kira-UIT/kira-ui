import React, { useRef } from "react";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClickButton = () => {
    buttonRef.current?.classList.add("animate");
    setTimeout(() => {
      buttonRef.current?.classList.remove("animate");
    }, 600);
    if (onClick) onClick();
  };
  return (
    <button ref={buttonRef} className="button" onClick={handleClickButton}>
      {children}
    </button>
  );
};

export default Button;
