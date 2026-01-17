import styles from "./Hero.module.css";
import logo from "../../assets/img/logo.svg";

function Hero() {
  return (
    <>
      <section
        className={`section ${styles.sectionHero} flex flex-center flex-column`}
      >
        <a href="#">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        <div className={`${styles.heroTextBox} flex flex-center flex-column`}>
          <h1>
            <span className={`${styles.name}`}>Hey, I'm Armando!</span> <br />
            <span className={`${styles.developer}`}>
              React/TypeScript Developer.
            </span>
          </h1>
          <p>
            Creating pretty websites with a organized, readable and scalable
            code.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
