"use client";

import styles from "@/app/components/Navbar/navbar.module.scss";
import useChangeTheme from "@/app/hooks/useThemeChange";

export default function Navbar() {
  const { colorScheme, toggleTheme } = useChangeTheme();

  return (
    <header className={styles.header}>
      <div className={styles.header_body}>
        <h1>Where in the World?</h1>
        <button
          className={`${styles.toggle_theme} flex_center`}
          aria-describedby="submit-desc"
          onClick={toggleTheme}
        >
          <p style={{fontSize: '3.2rem'}}>{colorScheme === "dark" ? "🌇" : "🌆"}</p>
        </button>
      </div>
    </header>
  );
}
