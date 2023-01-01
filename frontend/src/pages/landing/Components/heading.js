import styles from "../Style/heading.module.css"
import Navbar from "./navbar";
function Heading() {
    return (
      <div className={styles.container}>
        <Navbar/>
        <div className={styles.headingcontainer}>
        <div className={styles.heading}>
           Project Name
        </div>
        <div className={styles.subheading}>
          save water save earth some tagline here
          </div>
        </div>
      </div>
    );
  }
  
  export default Heading;