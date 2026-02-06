import styles from "./NavMobile.module.css";
import Nav from "./Nav";
import Button from "../ui/Button/Button";
import { useState } from "react";

function NavMobile() {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>
      <Button
        id="btn--menu"
        className={`btn btn--menu ${showNav ? "hidden" : "show"}`}
        text={<i className="fa-solid fa-bars"></i>}
        onClick={() => setShowNav(true)}
      />
      <div
        className={`${styles.navMobile} ${styles[showNav ? "show" : "hidden"]} flex flex-center flex-column`}
      >
        <Button
          id="btn--close-nav"
          className={`btn btn--close`}
          text={<i className="fa-solid fa-xmark"></i>}
          onClick={() => setShowNav(false)}
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
