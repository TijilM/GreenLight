import React from "react";
import styles from "../Style/navbar.module.css"
function Navbar() {
    return (
        <nav>
        <div className={styles.navbarContainer}>
          <div className={styles.navMenu}>
            <div>
              <a className={styles.navLinks} href="#whyccsid">
                Home
              </a>
            </div>
            <div>
              <a className={styles.navLinks} href="#whyccsid">
                Login
              </a>
            </div>
            <div>
              <a className={styles.navLinks} href="#carouselid">
                About Us
              </a>
            </div>
            <div>
              <a className={styles.navLinks} href="#carouselid">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;