import AboutBox from "../ui/AboutBox/AboutBox";
import styles from "./About.module.css";
import logo from "../../assets/img/logo.png";

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
            <AboutBox
              title={<i className="fa-brands fa-react"></i>}
              descriptionText={
                <>
                  Using the <strong>React</strong> library to implement
                  component creating dynamic and interactive applications.
                </>
              }
            />

            <AboutBox
              title={<i className="fa-solid fa-code"></i>}
              descriptionText={
                <>
                  Using <strong>TypeScript</strong> to implement safety in the
                  application, making it scalable and trustable.
                </>
              }
            />

            <AboutBox
              title={<i className="fa-solid fa-palette"></i>}
              descriptionText={
                <>
                  With the use of <strong>CSS</strong> the project will look
                  clean, responsive and really good looking.
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
