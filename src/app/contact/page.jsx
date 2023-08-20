/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/assets/contact.png'
            alt='contact with us'
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input} />
          <input type='text' placeholder='email' className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder='type your message'
            cols='30'
            rows='10'></textarea>
          <Button url='#' text='Send' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
