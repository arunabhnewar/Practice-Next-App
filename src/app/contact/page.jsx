/* eslint-disable react/no-unescaped-entities */
import Loading from "./loading";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <Loading />
    </div>
  );
};

export default Contact;
