import LogoHover from "../ui/LogoHover/LogoHover";
import styles from "./Nav.module.css";

interface NavProps {
  navHead?: boolean;
  navFooter?: boolean;
  logoHover?: boolean;
}

function Nav({ navHead = false, navFooter = false }: NavProps) {
  const navbarstyle = navHead
    ? "navbarHead"
    : navFooter
      ? "navbarFooter"
      : "noStyle";
  return (
    <>
      <nav className={styles[navbarstyle]}>
        <div className={styles.logoHeaderBox}>
          <LogoHover />
        </div>
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
