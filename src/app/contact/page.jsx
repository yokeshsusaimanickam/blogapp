import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '../../components/button/button'

export const metadata = {
  title: 'Yokesh contact information',
  description: 'This is contact page',
}
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="contact" fill={true} className={styles.image}/>
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input}/>
          <input type='text' placeholder='email' className={styles.input}/>
          <textarea className={styles.textarea} cols={10} rows={10} placeholder='message'/>
          <Button url={"#"} text={"send"}></Button>
        </form>
      </div>
      </div>
  )
}

export default Contact