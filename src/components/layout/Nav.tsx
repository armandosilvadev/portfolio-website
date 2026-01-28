import LogoHover from "../ui/LogoHover/LogoHover";
import styles from "./Nav.module.css";

interface NavProps {
  navHead?: boolean;
  navFooter?: boolean;
  isLogoSticky: boolean;
}

function Nav({ navHead = false, navFooter = false, isLogoSticky }: NavProps) {
  let navbarstyle: string = "";
  if (navHead) {
    navbarstyle = "navbarHead";
  }
  if (navFooter) {
    navbarstyle = "navbarFooter";
  }
  return (
    <>
      <nav className={`${styles[navbarstyle]}`}>
        <a
          href="#"
          className={`${styles.logoHeaderBox} ${styles[isLogoSticky ? "logoHeaderShow" : "logoHeaderHide"]}`}
        >
          <LogoHover />
        </a>
        <ul className={styles.navbarList}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
