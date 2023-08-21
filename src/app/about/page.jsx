import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "My Next App || About",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg'
          fill={true}
          alt='Web Developer'
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Dev With Loopers</h1>
          <h2 className={styles.imgDesc}>
            Where Development Meets Innovation: DevLopers
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Welcome to the dynamic world of web development innovation! Our web
            development team is a convergence of diverse talents, united by a
            shared passion for crafting digital experiences that redefine the
            online landscape. With a blend of creative designers, meticulous
            coders, and strategic thinkers, we are poised to revolutionize how
            businesses and individuals engage with the virtual realm.
            <br />
            <br />
            Our mission is to breathe life into ideas, transform visions into
            pixel-perfect realities, and elevate user experiences to
            unprecedented heights. As we embark on this exciting journey, we are
            committed to pushing boundaries, embracing challenges, and
            collaboratively shaping the future of the web. Join us in exploring
            the limitless possibilities of code and design – together, we are
            building more than websites; we are shaping the digital world one
            pixel at a time.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We play a vital role in shaping the digital landscape by creating
            dynamic and interactive websites that cater to diverse needs and
            user preferences. Creating responsive layouts that integrate complex
            backend functionalities that adapt across devices that drive user
            interaction, web developers are the architects behind the scenes,
            ensuring that websites not only look great but also function
            flawlessly.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Enterprise Management System
          </p>
          <Button url='/contact' text='Contact Us' />
        </div>
      </div>
    </div>
  );
};

export default About;
