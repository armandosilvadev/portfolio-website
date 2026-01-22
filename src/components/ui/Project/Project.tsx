import styles from "./Project.module.css";

interface ProjectProps {
  className?: string;
  projectImg: string;
  title: string;
  description: string;
}

function Project({ projectImg, title, description, className }: ProjectProps) {
  return (
    <>
      <div className={`${styles.project} ${className}`}>
        <img src={projectImg} alt="project image" />
        <div className={`${styles.descriptionBox} flex flex-column`}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Project;
