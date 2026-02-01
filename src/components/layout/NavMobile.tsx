import styles from "./NavMobile.module.css";
import Nav from "./Nav";
import Button from "../ui/Button/Button";

function NavMobile() {
  return (
    <>
      <div className={`${styles.navMobile} flex flex-center flex-column`}>
        <Button
          id="btn--close-nav"
          className={`btn btn--close ${styles.btnClose}`}
          text={<i className="fa-solid fa-xmark"></i>}
        />
        <Nav />
        <Button
          id="btn--contact"
          className="btn btn--contact"
          text="get in contact"
        />
      </div>
    </>
  );
}

export default NavMobile;
