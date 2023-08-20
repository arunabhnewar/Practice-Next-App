"use client";

import DarkThemeToggle from "@/components/DarkThemeToggle/DarkThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href='/'>
        DevWithLoopers
      </Link>

      <div className={styles.links}>
        <Link
          href='/'
          className={currentRoute === "/" ? "active-link" : "pending-link"}>
          Home
        </Link>

        <Link
          href='/portfolio'
          className={
            currentRoute === "/portfolio" ? "active-link" : "pending-link"
          }>
          Portfolio
        </Link>

        <Link
          href='/blog'
          className={currentRoute === "/blog" ? "active-link" : "pending-link"}>
          Blog
        </Link>

        <Link
          href='/about'
          className={
            currentRoute === "/about" ? "active-link" : "pending-link"
          }>
          About
        </Link>

        <Link
          href='/contact'
          className={
            currentRoute === "/contact" ? "active-link" : "pending-link"
          }>
          Contact
        </Link>

        <Link
          href='/dashboard'
          className={
            currentRoute === "/dashboard" ? "active-link" : "pending-link"
          }>
          Dashboard
        </Link>

        <DarkThemeToggle />

        <button
          onClick={e => {
            console.log("signed out");
          }}
          className={styles.logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
