import styles from "./Footer.module.css";
import Socials from "../ui/Socials/Socials";
import { socials } from "../../data/socials";
import Nav from "../layout/Nav";
import logoImg from "../../assets/img/logo.png";

function Footer() {
  return (
    <>
      <footer className={`section ${styles.sectionFooter}`}>
        <div className={styles.footerBox}>
          <div className={styles.quickContacts}>
            <h4 className={styles.footerHeading}>Quick Connection</h4>
            <Socials socials={socials} icon text />
          </div>

          <div className={styles.quickNav}>
            <h4 className={styles.footerHeading}>Navigation</h4>
            <Nav navFooter isLogoSticky={false} />
          </div>

          <div className={styles.fullLogoBox}>
            <div className={`${styles.logoBox} flex flex-center`}>
              <img src={logoImg} alt="logo image" /> <span>ARMANDODEV</span>
            </div>
            <p className={styles.gmailText}>
              <a href="mailto:armandodev.silva@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope"></i>
                armandodev.silva@gmail.com
              </a>
            </p>
          </div>

          <p className={styles.copyText}>Copyright &copy; 2026 Armando Dev</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
