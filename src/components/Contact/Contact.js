import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1>Contact </h1>
        <h3>Feel free to reach out!</h3>
    </div>
    <div>
        <ul  className={styles.content2}>
            <li>
                <img src={getImageUrl("/contact/emailIcon.png")} alt="" />
                <p>myemail@email.com</p>
            </li>
            <li>
            <img src={getImageUrl("/contact/githubIcon.png")} alt="" />
                <p>myemail@email.com</p>
            </li>
            <li>
            <img src={getImageUrl("/contact/linkedinIcon.png")} alt="" />
                <p>myemail@email.com</p>
            </li>
        </ul>
    </div> 
    </section>
  )
}

export default Contact
