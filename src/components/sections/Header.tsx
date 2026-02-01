import styles from "./Header.module.css";
import Nav from "../layout/Nav.tsx";
import Button from "../ui/Button/Button.tsx";
import { useEffect, useState } from "react";

function Header() {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleIsScrollY = () => {
      setScrollY(window.scrollY);
      if (window.scrollY < scrollY) {
        setShowHeader(true);
      } else if (window.scrollY > scrollY) {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleIsScrollY);
    return () => {
      window.removeEventListener("scroll", handleIsScrollY);
    };
  });

  return (
    <>
      <section
        className={`section ${styles.sectionHeader} ${styles[showHeader ? "showHeader" : "hideHeader"]}`}
      >
        <header className={`${styles.header} flex flex-center`}>
          <Nav navHead />

          <div className={`${styles.containerBtn} flex`}>
            <Button
              id="btn--contact"
              className="btn btn--contact"
              text="contact"
            />
            <Button
              className="btn btn--color-mode"
              text={<i className="fa-regular fa-moon"></i>}
            />
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
