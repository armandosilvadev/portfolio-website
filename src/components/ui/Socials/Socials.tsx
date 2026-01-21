import styles from "./Socials.module.css";
import type { HTMLAttributes } from "react";
import type { Social } from "../../../types/social";

interface SocialsProps extends HTMLAttributes<HTMLUListElement> {
  socials: Social[];
}

function Socials({ socials, ...props }: SocialsProps) {
  return (
    <>
      <ul {...props} className={`${styles.listSocials} ${props.className}`}>
        {socials.map((s) => {
          const randomKey = crypto.randomUUID();
          return (
            <li key={randomKey}>
              <a href={s.link} target="_blank">
                {s.text}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Socials;
