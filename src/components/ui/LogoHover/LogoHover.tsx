import logoImg from "../../../assets/img/logo_lighter.png";
import logoLightImg from "../../../assets/img/logo_light_lighter.png";
import logoHoverImg from "../../../assets/img/logo_hover_lighter.png";
import logoHoverLightImg from "../../../assets/img/logo_light_hover_lighter.png";
import styles from "./LogoHover.module.css";
import { useEffect, useState } from "react";

function LogoHover() {
  const [logo, setLogo] = useState<string>(logoImg);
  const [logoHover, setLogoHover] = useState<string>(logoHoverImg);

  useEffect(() => {
    const body = document.body;

    const updateLogo = () => {
      const isDark = body.dataset.theme === "dark";

      setLogo(isDark ? logoImg : logoLightImg);
      setLogoHover(isDark ? logoHoverImg : logoHoverLightImg);
    };

    updateLogo();

    const observer = new MutationObserver(updateLogo);

    observer.observe(body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  });
  return (
    <div className={styles.logoHoverBox}>
      <img src={logoHover} alt="logo" className={styles.logoHover} />
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
  );
}

export default LogoHover;
