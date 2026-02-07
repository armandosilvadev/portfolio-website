import styles from "./Portfolio.module.css";
// import Project from "../ui/Project/Project";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className={`section ${styles.sectionPortfolio}`}>
        <div className={`${styles.containerProjects}`}></div>
      </section>
    </>
  );
}

export default Portfolio;
