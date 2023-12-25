import React from 'react'
import { getImageUrl } from '../../../utils'
import styles from './ProjectSection.module.css'

const Projectsection = (props) => {
  return (
    <section className={styles.container}>
      <img src={getImageUrl(`/projects/${props.img}`)} alt="" className={styles.projectimg}/>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>
        {props.description}
      </p>
      <div className={styles.tools} >
        <h5>React</h5>
        <h5>Express</h5>
        <h5>Node</h5>
      </div>
      <div className={styles.tools}>
        <button>Demo</button>
        <button>Source</button>
      </div>
    </section>
  )
}

export default Projectsection
