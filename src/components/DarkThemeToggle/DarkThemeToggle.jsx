"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./DarkThemeToggle.module.css";

const DarkThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={styles.container}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={resolvedTheme === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkThemeToggle;
