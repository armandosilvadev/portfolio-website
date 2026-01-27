import styles from "./Socials.module.css";
import type { HTMLAttributes } from "react";
import type { Social } from "../../../types/social";

interface SocialsProps extends HTMLAttributes<HTMLUListElement> {
  socials: Social[];
  icon?: boolean;
  text?: boolean;
}

function Socials({
  socials,
  icon = false,
  text = false,
  ...props
}: SocialsProps) {
  return (
    <>
      <ul {...props} className={`${styles.listSocials} ${props.className}`}>
        {socials.map((s) => {
          const randomKey = crypto.randomUUID();
          return (
            <li key={randomKey}>
              <a href={s.link} target="_blank">
                {icon ? s.icon : ""}
                {text ? s.text : ""}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Socials;
