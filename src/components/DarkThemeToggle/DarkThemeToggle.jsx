"use client";

// import { ThemeContext } from "@/context/ThemeContext";
// import { useContext } from "react";
// import styles from "./DarkThemeToggle.module.css";

// const DarkThemeToggle = () => {
//   const { toggle, mode } = useContext(ThemeContext);

//   return (
//     <div onClick={toggle} className={styles.container}>
//       <div className={styles.icon}>🌙</div>
//       <div className={styles.icon}>🔆</div>
//       <div
//         className={styles.ball}
//         style={mode === "light" ? { left: "2px" } : { right: "2px" }}
//       />
//     </div>
//   );
// };

// export default DarkThemeToggle;

// const DarkThemeToggle = () => {
//   return (
//     <div>
//       <h1>a</h1>
//     </div>
//   );
// };

// export default DarkThemeToggle;

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
