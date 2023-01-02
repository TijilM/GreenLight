import React from 'react'
import styles from "../Style/classroom.module.css"
export default function classroom(props) {
  return (
    <>
    {props.classData.isLightOn ?
  
    <div className={styles.classRed}>
        <div className={styles.classData}>
            <p>{props.classData.name}  </p>
        </div>
        <div className={styles.classData}>
            <p>  Status : On</p>
        </div>
        <div className={styles.classData}>
            <i class="fa-solid fa-camera"></i>
        </div>
        <div className={styles.classData}>
            
        </div>

    </div>
    :
    <div className={styles.classBlue}>
    <div className={styles.classData}>
        <p>{props.classData.name}  </p>
    </div>
    <div className={styles.classData}>
        <p  >Status : Off</p>
    </div>
    <div className={styles.classData}>
        <i class="fa-solid fa-camera"></i>
    </div>
    <div className={styles.classData}>
        
    </div>

</div>
  }
  </>
  )
}
