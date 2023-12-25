import React from "react";
// import getImageUrl from '../../utils'
import styles from "./Project.module.css";
import ProjectSection from "./projectsection/ProjectSection";
const Project = () => {
  return (
    <section className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.content}>
        <ProjectSection
          title="Fit Pocket"
          description="Possesses in-depth knowledge of key data structures, including arrays, linked lists, trees, and graphs, enabling the design and implementation of efficient and scalable solutions"
          img="Fitpocket.png"
        />
        <ProjectSection title="AniWatch" 
          img="Aniwatch.png"
          description="Possesses in-depth knowledge of key data structures, including arrays, linked lists, trees, and graphs, enabling the design and implementation of efficient and scalable solutions"
        />
        <ProjectSection title="College Predictor" 
          img="CollegePred.png"
          description="Possesses in-depth knowledge of key data structures, including arrays, linked lists, trees, and graphs, enabling the design and implementation of efficient and scalable solutions"
        />
      </div>
    </section>
  );
};

export default Project;
