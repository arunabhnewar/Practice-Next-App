import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src='/assets/1.png'
          width={20}
          height={20}
          className={styles.icon}
          alt='Facebook Account'
        />
        <Image
          src='/assets/2.png'
          width={20}
          height={20}
          className={styles.icon}
          alt='Instagram Account'
        />
        <Image
          src='/assets/3.png'
          width={20}
          height={20}
          className={styles.icon}
          alt='Twitter Account'
        />
        <Image
          src='/assets/4.png'
          width={20}
          height={20}
          className={styles.icon}
          alt='Youtube Account'
        />
      </div>
      <div>©2023 devwithloppers. All rights reserved.</div>
    </div>
  );
};

export default Footer;
