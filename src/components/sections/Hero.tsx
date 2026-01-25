import styles from "./Hero.module.css";
import logoImg from "../../assets/img/logo.png";
import logoHoverImg from "../../assets/img/logo_hover.png";
import Socials from "../ui/Socials/Socials";
import Button from "../ui/Button/Button";
import type { Social } from "../../types/social";

function Hero() {
  const socials: Social[] = [
    {
      link: "https://github.com/armandosilvadev",
      text: <i className="fa-brands fa-github"></i>,
    },
    {
      link: "https://www.linkedin.com/in/armando-silvadev/",
      text: <i className="fa-brands fa-square-linkedin"></i>,
    },
    {
      link: "https://wa.me/5585996499718",
      text: <i className="fa-brands fa-whatsapp"></i>,
    },
  ];
  return (
    <>
      <section className={`section ${styles.sectionHero} flex flex-center`}>
        <div className={`${styles.heroTextBox} flex flex-center flex-column`}>
          <a
            href="https://github.com/armandosilvadev"
            target="_blank"
            className={styles.logoImgArea}
          >
            <img src={logoHoverImg} alt="logo" className={styles.logoHover} />
            <img src={logoImg} alt="logo" className={styles.logo} />
          </a>
          <h1>
            <span className={`${styles.name}`}>Hey, I'm Armando!</span> <br />
            <span className={`${styles.developer}`}>
              React/TypeScript Developer.
            </span>
          </h1>
          <p>
            Creating pretty websites with a organized, readable and scalable
            project.
          </p>
          <div className={`${styles.containerSocials}`}>
            <Socials
              socials={socials}
              className="flex"
              style={{ gap: "1.4rem" }}
            />
          </div>
          <Button
            text={
              <>
                <span>get to know </span>
                <i className="fa-solid fa-arrow-right"></i>
              </>
            }
            id="btn--contact"
            className="btn btn--contact"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
