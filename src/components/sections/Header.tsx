import styles from "./Header.module.css";
import Nav from "../layout/Nav.tsx";
import Button from "../ui/Button/Button.tsx";
import { useEffect, useState } from "react";
import NavMobile from "../layout/NavMobile.tsx";
import DarkMode from "../ui/DarkMode/DarkMode.tsx";

function Header() {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);
  const [navMobile, setNavMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleIsScrollY = () => {
      setScrollY(window.scrollY);
      if (window.scrollY < scrollY) {
        setShowHeader(true);
      } else if (window.scrollY > scrollY) {
        setShowHeader(false);
      }
    };

    const handleWindowWidth = () => {
      if (window.innerWidth <= 720) {
        setNavMobile(true);
      } else {
        setNavMobile(false);
      }
    };

    window.addEventListener("resize", handleWindowWidth);
    window.addEventListener("scroll", handleIsScrollY);
    window.addEventListener("load", handleWindowWidth);
    return () => {
      window.removeEventListener("scroll", handleIsScrollY);
      window.removeEventListener("resize", handleWindowWidth);
      window.removeEventListener("load", handleWindowWidth);
    };
  });

  return (
    <>
      <section
        className={`section ${styles.sectionHeader} ${styles[showHeader ? "showHeader" : "hideHeader"]}`}
      >
        <header className={`${styles.header} `}>
          {navMobile ? <NavMobile /> : <Nav navHead />}

          <div className={`${styles.containerBtn} flex`}>
            <Button
              id="btn--contact"
              className="btn btn--contact"
              text="contact"
            />
            <DarkMode />
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
