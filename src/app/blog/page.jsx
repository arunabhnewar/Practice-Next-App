import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import blogImg from "/public/assets/blog.png";

const blogData = async () => {
  const response = await fetch("https://dummyjson.com/posts", {
    next: { revalidate: 3600 },
  });
  const data = await response.json();
  return data.posts;
};

export const metadata = {
  title: "My Next App || Blog",
};

const Blog = async () => {
  const post = await blogData();

  return (
    <div className={styles.mainContainer}>
      {post.map((item, index) => {
        return (
          <Link
            href={`/blog/${item.id}`}
            className={styles.container}
            key={index}>
            <div className={styles.imageContainer}>
              <Image
                src={blogImg}
                alt='blog'
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
