import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utils";
const About = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.aboutItems}>
        <img
          src={getImageUrl("/about/aboutImage.png")}
          alt="hero here"
          className={styles.aboutImg}
        />
        <ul className={styles.content}>
          <li className={styles.special}>
            <img src={getImageUrl("/about/cursorIcon.png")} alt=""  className={styles.imgc}/>
            <div>
              <h1 >Front End</h1>
              <p >
                Being a front-end developer means you focus on building user
                interfaces and experiences for websites or web applications
              </p>
            </div>
          </li>
          <li>
            <img src={getImageUrl("/about/serverIcon.png")} alt=""   className={styles.imgc}/>
            <div>
              <h1 >Data Structures</h1>
              <p >
                Possesses in-depth knowledge of key data structures, including
                arrays, linked lists, trees, and graphs, enabling the design and
                implementation of efficient and scalable solutions
              </p>
            </div>
          </li>
          <li className={styles.special2}>
            <img src={getImageUrl("/about/uiIcon.png")} alt=""   className={styles.imgc }/>
            <div>
              <h1 >Problem Solving</h1>
              <p >
                Possesses in-depth knowledge of key data structures, including
                arrays, linked lists, trees, and graphs, enabling the design and
                implementation of efficient and scalable solutions
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
