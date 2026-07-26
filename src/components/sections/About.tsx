import AboutBox from '../ui/AboutBox/AboutBox';
import { abouts } from '../../data/abouts';
import styles from './About.module.css';

function About() {
  return (
    <>
      <section
        id='about'
        className={`section ${styles.sectionAbout} flex flex-center`}
      >
        <div
          className={`${styles.aboutContainer} flex flex-center flex-column`}
        >
          <p className={styles.devDescription}>
            Hi, I'm <strong>Armando</strong>, a{' '}
            <strong>Full-Stack Software Developer</strong> who has been building
            modern, responsive, and scalable applications for{' '}
            <strong>over a year</strong> through personal projects and
            continuous learning.
          </p>

          <div className={styles.stacksBox}>
            {abouts.map(a => {
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
