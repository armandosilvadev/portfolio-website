import styles from "./DarkMode.module.css";
import { useEffect, useState } from "react";

function DarkMode() {
  const body = document.body;
  const [isDark, setIsDark] = useState<boolean>(() => {
    const storageTheme = localStorage.getItem("theme");
    return storageTheme !== "light";
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [body, isDark]);

  return (
    <>
      <input
        className={styles.darkModeInput}
        type="checkbox"
        id="darkmode-toggle"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      <label
        className={`${styles.darkModeLabel} flex flex-center`}
        htmlFor="darkmode-toggle"
      >
        {isDark ? (
          <i className="fa-regular fa-moon"></i>
        ) : (
          <i className="fa-regular fa-sun"></i>
        )}
      </label>
    </>
  );
}

export default DarkMode;
