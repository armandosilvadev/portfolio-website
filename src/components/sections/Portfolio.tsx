import { projects } from '../../data/projects';
import Button from '../ui/Button/Button';
import Projects from '../ui/Projects/Projects';
import styles from './Portfolio.module.css';

function Portfolio() {
  return (
    <>
      <section
        id='portfolio'
        className={`section ${styles.sectionPortfolio}`}
      >
        <div className={`${styles.containerProjects}`}>
          <Projects projects={projects} />
        </div>
        <div className={styles.showMoreBtnContainer}>
          <Button
            text={
              <>
                <span>see more</span>
                <br></br>
                <i className='fa-solid fa-angle-down'></i>
              </>
            }
            id='btn--show-more'
            className='btn btn--show-more'
          />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
