import React from 'react'
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <a className={styles.title} href="">Portfolio</a>
        <div>
            <ul className={styles.menuitems} >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#Experince">Experince</a>
                </li>
                <li>
                    <a href="#Projects">Projects</a>
                </li>
                <li>
                    <a href="#Contacts">Contacts</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
