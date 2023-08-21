import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import blogImg from "/public/assets/blog.png";

const blogData = async id => {
  const response = await fetch(`https://dummyjson.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return notFound();
  }

  const data = await response.json();
  return data;
};

export async function generateMetadata({ params }) {
  const post = await blogData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await blogData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data["tags"].join(", ")}</p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='fucker'
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Father Fucker</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={blogImg}
            alt='blog'
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
