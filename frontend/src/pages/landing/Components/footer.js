import React from "react";
import styles from "../Style/footer.module.css"
const Footer = () => (
    <section id="contact">
  <div className={styles.footer}>
    <div className={styles.footerGrid}>

      <div className={styles.fGridElement}>
        <h4 className={styles.fHeading}>GreenLight</h4>
        <hr className={styles.fHrStyle}></hr>
        <p className={styles.fPara}>Our team believes in creating efficient and creative technological solutions to promote and implement efficient and judicious use of resources</p>
      </div>

      <div className={styles.fGridElement}>
        <h4 className={styles.fHeading}>Quick Links</h4>
        <hr className={styles.fHrStyle}></hr>
      
        <div className={styles.fLink}>
          <a  href="">> Info</a>
        </div>

        <div className={styles.fLink}>
          <a  href="">> GitHub Repository</a>
        </div>

        <div className={styles.fLink}>
          <a  href="">> Power Loss Data</a>
        </div>
      </div>

      <div className={styles.fGridElement}>
        <h4 className={styles.fHeading}>Contact Us</h4>
        <hr className={styles.fHrStyle}></hr>
        <div className={styles.fContact}>
            <div className={styles.pNo}>
                Ph No. :
            </div>
            <div className={styles.pNo}>
              <p>+91 6969696969 | Chandravo</p>
              <p>+91 6696969699 | Tijil</p>
              <p>+91 2212331714 | Avirat</p>
          </div>
        </div>
        <div className={styles.fContact}>
            <div className={styles.pNo}>
                Email :
            </div>
            <div className={styles.pNo}>
              <br></br>
              <p>cbhattu@lmaoskull.thapar.edu | Chandravo</p>
              <p>exampleemail@lmaoskull.thapar.edu | Tijil</p>
              <p>somerandomemail@lmaoskull.thapar.edu | Avirat</p>
          </div>
        </div>
      </div>

    </div>
    <center><div className={styles.finisher}>
        Made With ReactJS & Django
      </div></center>
  </div>
  </section>
);

export default Footer;