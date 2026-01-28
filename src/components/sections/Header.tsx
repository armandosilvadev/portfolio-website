import styles from "./Header.module.css";
import Nav from "../layout/Nav.tsx";
import Button from "../ui/Button/Button.tsx";
import { useEffect, useState } from "react";

function Header() {
  const [isLogoSticky, setIsLogoSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleIsLogoSticky = () => {
      setIsLogoSticky(window.scrollY > 110);
    };

    window.addEventListener("scroll", handleIsLogoSticky);
    return window.addEventListener("scroll", handleIsLogoSticky);
  });

  return (
    <>
      <section className={`section ${styles.sectionHeader}`}>
        <header className={`${styles.header} flex flex-center`}>
          <Nav navHead isLogoSticky={isLogoSticky} />

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
