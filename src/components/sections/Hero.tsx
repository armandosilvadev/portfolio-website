import styles from "./Hero.module.css";
import logoImg from "../../assets/img/logo.png";
import logoHoverImg from "../../assets/img/logo_hover.png";

function Hero() {
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
            website project.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
