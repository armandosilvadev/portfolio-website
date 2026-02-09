import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className: string;
  text: string | React.ReactNode;
}

function Button({ id, className, text, ...props }: ButtonProps) {
  const classNames: string = className
    .split(" ")
    .map((c) => styles[c])
    .join(" ");

  const contact = id === "btn--contact";

  return (
    <>
      {contact ? (
        <a
          href="https://wa.me/5585996499718"
          target="_blank"
          className={`${styles.btnContact} ${styles.btn} flex flex-center`}
        >
          {text}
        </a>
      ) : (
        <button {...props} id={id} className={classNames}>
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
