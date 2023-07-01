import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import {notFound} from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{cache: 'no-store'})
/* To fetch fresh data on every fetch request, use the cache: 'no-store' option. */

  /*  revalidate cached data at a timed interval, you can use the next.
  revalidate option in fetch() to set the cache lifetime of a resource (in seconds). {next:{revalidate:10}}*/

  if (!res.ok) {
    
    return notFound();
  }
 
  return res.json()
}

export async function generateMetadata({ params }) {
  const post =await getData(params.id);
  return {
    title: post.title,
    desc:post.desc,
  }
}

const BlogPost = async ({ params }) => {
  const data=await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
         {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt="image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt="image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
       {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;