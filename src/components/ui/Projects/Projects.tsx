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
        className={`${styles.projectsContainer} ${props.className}`}
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

            <h3>{project.title}</h3>
            <div className={styles.links}>
              {project.link && (
                <a
                  href={project.github}
                  target='_blank'
                >
                  Website
                </a>
              )}
              <a
                href={project.github}
                target='_blank'
              >
                Github
              </a>
            </div>
            <p>{project.description}</p>

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
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
