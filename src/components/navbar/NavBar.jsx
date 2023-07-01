"use client";
import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css";
import DarkModeToggle from "../darkmodetoggle/darkmodetoggle.jsx";
import { signOut, useSession } from "next-auth/react";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const NavBar = () => {
  const session=useSession();
  /* useSession() React Hook can be used to check user login status */
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>BlogSpot</Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link)=>(
          <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
        ))}
        {session.status==="authenticated"&&(
        <button onClick={signOut} className={styles.logout}>Logout</button>
        )
      }
      </div>
    </div>
  )
}

export default NavBar