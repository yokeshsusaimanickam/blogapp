"use client";
import React, { useContext } from 'react'
import styles from "./darkmodetoggle.module.css";
import Image from 'next/image';
import ThemeContext, { themeContext } from "../../context/ThemeContext.js";
const DarkModeToggle = () => {
  /* in order to use the context in a child component we need to access it using the usecontext hook */
  const {toggle,mode}=useContext(themeContext);
  
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}><Image src={"https://cdn-icons-png.flaticon.com/128/547/547433.png"} height={15} width={15} alt='moon'/></div>
      <div className={styles.icon}><Image src={"https://cdn-icons-png.flaticon.com/128/869/869869.png"} height={20} width={20} alt='sun'/></div>
      <div className={styles.ball} style={mode==="light"?{left:"2px"}:{right:"2px"}}></div>
    </div>
  )
}

export default DarkModeToggle;