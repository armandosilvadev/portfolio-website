import styles from "./AboutBox.module.css";

interface AboutBoxProps {
  title: string | React.ReactNode;
  descriptionText: string | React.ReactNode;
  className?: string;
}

function AboutBox({ title, descriptionText }: AboutBoxProps) {
  return (
    <>
      <div className={styles.aboutBox}>
        <span className={`${styles.stackIcon} flex flex-center`}>{title}</span>
        <p>{descriptionText}</p>
      </div>
    </>
  );
}

export default AboutBox;
