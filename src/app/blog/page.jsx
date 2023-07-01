import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts',{cache: 'no-store'})
/* To fetch fresh data on every fetch request, use the cache: 'no-store' option. */

  /*  revalidate cached data at a timed interval, you can use the next.
  revalidate option in fetch() to set the cache lifetime of a resource (in seconds). {next:{revalidate:10}}*/

  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const Blog =async () => {
  const data=await getData();
  return (
    <div className={styles.container}>
      {data.map((item)=>(
        <Link href={`/blog/${item._id}`}  className={styles.link} key={item.id}>
        <div className={styles.imageContainer}>
<Image src={item.img} alt='' width={400} height={250} className={styles.image}/>
        </div>
        <div className={styles.content}>
<h1 className={styles.title}>{item.title}</h1>
<p className={styles.desc}>{item.desc}</p>
        </div>
      </Link>
      ))}
      </div>
  )
}

export default Blog