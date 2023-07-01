import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyrights}>@2023 blog.All rights reserved.</div>
      <div className={styles.footer_images}>
        <Image alt='logos' src="/1.png" className={styles.icons} width={30} height={30}/>
        <Image alt='logos' src="/2.png" className={styles.icons} width={30} height={30}/>
        <Image alt='logos' src="/3.png" className={styles.icons} width={30} height={30}/>
        <Image alt='logos' src="/4.png" className={styles.icons} width={30} height={30}/>
        </div>
    </div>
  )
}

export default Footer