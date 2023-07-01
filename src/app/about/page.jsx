import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Button from "../../components/button/button"
const About = () => {
  return (
    <div className={styles.container}>
       <div className={styles.imgContainer}>
<Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
alt='pexel img' fill={true} className={styles.image}/>
<div className={styles.imgText}>
  <h1 className={styles.imgTitle}>Digital Storytellers</h1>
  <h2 className={styles.imgDescription}>Handcrafting award winning digital experience</h2>
</div>
       </div>
       <div className={styles.textContainer}>
       <div className={styles.item}>
        <h1 className={styles.title}>Who are we?</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat.
           <br/>
           <br/>
            Duis aute irure dolor in 
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
           deserunt mollit anim id est laborum.</p>
       </div>
       <div className={styles.item}>
       <h1 className={styles.title}>What we do?</h1>
       <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Creative Illustrations
          <br/>
           <br/>-Dynamic websites
           <br/>
           <br/>-Fast and Handy
           <br/>
           <br/>-obile Apps
          </p>
          <Button text="contact" url="/contact"></Button>
       </div>
       </div>
    </div>
  )
}

export default About