import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';


const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hii, I'm Karan</h1>
        <p  className={styles.description}>
          I'm a front-end developer, a fresher who is about to graduate with
          React.js. So, yeah, that's all about me.
        </p>
        <a href="mailto:karanjitendrasharma302@gmail.com" className={styles.contactBtn}>Contact me</a>
      </div>
      <img src={getImageUrl("/hero/heroImage.png")} alt="hero here" className={styles.heroImg}/>
      {console.log(getImageUrl("/hero/heroImage.png"))}
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
