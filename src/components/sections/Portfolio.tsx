import { projects } from "../../data/projects";
import Projects from "../ui/Projects/Projects";
import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className={`section ${styles.sectionPortfolio}`}>
        <div className={`${styles.containerProjects}`}>
          <Projects projects={projects}/>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
