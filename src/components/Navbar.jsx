import React from 'react'
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <>
        <div >
            <ul className={styles.navbar}>
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
            </ul>

        </div>
        <div style={{textAlign:'center'}}>
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
    </>
  )
}

export default Navbar