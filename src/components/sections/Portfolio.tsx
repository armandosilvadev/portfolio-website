import styles from "./Portfolio.module.css";
import Project from "../ui/Project/Project";
import logo from "../../assets/img/logo.png";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className={`section ${styles.sectionPortfolio}`}>
        <h2>Come to Know My Projects</h2>
        <div className={`${styles.containerProjects}`}>
          <Project
            className={`${styles.projectItem}`}
            projectImg={logo}
            title="Example"
            description="ASdava sa sjlakvna  aslkjdasd awljie "
          />
          <Project
            className={`${styles.projectItem}`}
            projectImg={logo}
            title="Example"
            description="ASdava sa sjlakvna  aslkjdasd awljie "
          />
          <Project
            className={`${styles.projectItem}`}
            projectImg={logo}
            title="Example"
            description="ASdava sa sjlakvna  aslkjdasd awljie "
          />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
