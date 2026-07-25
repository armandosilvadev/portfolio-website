import { useState } from 'react';
import { projects } from '../../data/projects';
import Button from '../ui/Button/Button';
import Projects from '../ui/Projects/Projects';
import styles from './Portfolio.module.css';

function Portfolio() {
  const [showMore, setShowMore] = useState<string>('');
  const [btnText, setBtnText] = useState<string>('show more');
  const [btnIcon, setBtnIcon] = useState<string | React.ReactNode>(
    <i className='fa-solid fa-angle-down'></i>,
  );

  const handleShowMore = () => {
    if (!showMore) {
      setShowMore('show');
      setBtnText('show less');
      setBtnIcon(<i className='fa-solid fa-angle-up'></i>);
    } else {
      setShowMore('');
      setBtnText('show more');
      setBtnIcon(<i className='fa-solid fa-angle-down'></i>);
    }
  };

  return (
    <>
      <section
        id='portfolio'
        className={`section ${styles.sectionPortfolio}`}
      >
        <div className={`${styles.containerProjects} ${styles[showMore]}`}>
          <Projects projects={projects} />
        </div>
        <div className={styles.showMoreBtnContainer}>
          <Button
            onClick={handleShowMore}
            text={
              <>
                <span>{btnText}</span>
                <br></br>
                {btnIcon}
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
