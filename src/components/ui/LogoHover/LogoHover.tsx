import logoImg from "../../../assets/img/logo.png";
import logoHoverImg from "../../../assets/img/logo_hover.png";
import styles from "./LogoHover.module.css";

function LogoHover() {
  return (
    <div className={styles.logoHoverBox}>
      <img src={logoHoverImg} alt="logo" className={styles.logoHover} />
      <img src={logoImg} alt="logo" className={styles.logo} />
    </div>
  );
}

export default LogoHover;
