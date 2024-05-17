"use client";

import styles from "@/app/components/Navbar/navbar.module.scss";
import useChangeTheme from "@/app/hooks/useThemeChange";
import Image from "next/image";

import sun from "/public/sun.svg";
import moon from "/public/moon.svg";

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
          <Image
            src={colorScheme === "dark" ? sun : moon}
            alt={
              colorScheme === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark mode"
            }
            className="image"
          />
        </button>{" "}
      </div>
    </header>
  );
}
