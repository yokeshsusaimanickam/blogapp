import Image from 'next/image'
import styles from './page.module.css'
/* if we import out image like this we dont need to provide width and height */
import Hero from "public/hero.png"
import Button from '../components/button/button'

export default function Home() {
  return (
 <div className={styles.container}>
  <div className={styles.item}>
    <h1 className={styles.title}>Better design for your digital products.</h1>
    <p className={styles.description}>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
    <Button text={"see our works"} url={"/portfolio"}></Button>
  </div>
  <div className={styles.item}>
  <Image src={Hero} alt="hero" className={styles.image}></Image>
  </div>
 </div>
  )
}
