import styles from "./Header.module.css";
import Nav from "../layout/Nav.tsx";

function Header() {
  return (
    <>
      <section className={`section ${styles.sectionHeader}`}>
        <header>
          <Nav />
        </header>
      </section>
    </>
  );
}

export default Header;
