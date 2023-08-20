"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import styles from "./DarkThemeToggle.module.css";

const DarkThemeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div onClick={toggle} className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkThemeToggle;
