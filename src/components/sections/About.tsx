import AboutBox from "../ui/AboutBox/AboutBox";
import { abouts } from "../../data/abouts";
import styles from "./About.module.css";
import logo from "../../assets/img/logo_light.png";

function About() {
  return (
    <>
      <section
        id="about"
        className={`section ${styles.sectionAbout} flex flex-center`}
      >
        <div className={`${styles.aboutContainer}`}>
          <img
            src={logo}
            width={"100%"}
            alt="dev image"
            className={styles.devImage}
          />
          <p className={styles.devDescription}>
            Hi, I'm <strong>Armando</strong>, a{" "}
            <strong>Front-End Developer</strong> with more than{" "}
            <strong>1 year and a half of experience</strong> creating modern,
            and responsive applications.
          </p>

          <div className={styles.stacksBox}>
            {abouts.map((a) => {
              return (
                <AboutBox
                  key={a.key}
                  title={a.title}
                  descriptionText={a.descriptionText}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
