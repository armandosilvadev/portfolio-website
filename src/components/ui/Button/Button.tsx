import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className: string;
  text: string | React.ReactNode;
}

function Button({ id, className, text }: ButtonProps) {
  const classNames: string = className
    .split(" ")
    .map((c) => styles[c])
    .join(" ");

  return (
    <>
      <button id={id} className={classNames}>
        {text}
      </button>
    </>
  );
}

export default Button;
