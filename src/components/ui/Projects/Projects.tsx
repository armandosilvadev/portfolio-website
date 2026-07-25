import type { HTMLAttributes } from 'react';
import styles from './Projects.module.css';
import type { Project } from '../../../types/project';

interface ProjectProps extends HTMLAttributes<HTMLDivElement> {
  projects: Project[];
}

function Projects({ projects, ...props }: ProjectProps) {
  return (
    <>
      <div
        {...props}
        className={`${styles.projectsContainer} ${props.className} flex flex-column`}
      >
        {projects.map(project => (
          <div
            key={project.id}
            className={styles.projectBox}
          >
            <img
              src={project.images?.image}
              alt={project.images?.altText}
            />

            <div className={styles.detailsBox}>
              <h3>{project.title}</h3>
              <div className={styles.links}>
                {project.link && (
                  <a
                    href={project.github}
                    target='_blank'
                  >
                    <i className='fa-solid fa-arrow-up-right-from-square'></i>
                    <span>Try yourself</span>
                  </a>
                )}
                <a
                  href={project.github}
                  target='_blank'
                >
                  <i className='fa-brands fa-github'></i>
                  <span>Github</span>
                </a>
              </div>

              <p className={styles.description}>{project.description}</p>
            </div>

            <div className={styles.carouselTechStack}>
              <div className={styles.carouselTrack}>
                <ul className={styles.listTechStack}>
                  {project.techstack.map(techstack => (
                    <li
                      key={techstack.tech}
                      className={styles[techstack.stack]}
                    >
                      {techstack.tech}
                    </li>
                  ))}
                </ul>

                <ul
                  aria-hidden
                  className={styles.listTechStack}
                >
                  {project.techstack.map(techstack => (
                    <li
                      key={techstack.tech}
                      className={styles[techstack.stack]}
                    >
                      {techstack.tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
