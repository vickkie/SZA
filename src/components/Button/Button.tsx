import React from "react";
import S from "./Button.module.scss";
import { ReactComponent as Arrow } from "../../svgs/arrow.svg";

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  use: "section-one" | "section-one-alt" | "section-nine" | "credits" | "contact";
};

const Button: React.FC<ButtonProps> = ({ use, text, onClick, disabled, type = "button" }) => {
  return (
    <div className={`${S[use]} ${S.buttonContainer}`}>
      <button aria-label={text} type={type} onClick={onClick} disabled={disabled} className={S.button}>
        <Arrow width="10vh" className={S.arrow} />
        <div className={S.background} />
      </button>
      <p className={S.text}>{text}</p>
    </div>
  );
};

export default Button;
