import React, { useState } from 'react'
import styles from "../Style/classrooms.module.css"
import Classroom from "./classroom"
export default function classrooms() {
    const classRooms= [{
        name:"LT101",
        isLightOn: false,
    },
    {
        name:"LT102",
        isLightOn: true,
    },
    {
        name:"LT103",
        isLightOn: false,
    },
    {
        name:"LT201",
        isLightOn: true,
    },
    {
        name:"LT202",
        isLightOn: false,
    },
    {
        name:"LT203",
        isLightOn: false,
    },
    {
        name:"LT301",
        isLightOn: true,
    },
    {
        name:"LT302",
        isLightOn: false,
    },
    {
        name:"LT303",
        isLightOn: false,
    },
    {
        name:"LT401",
        isLightOn: false,
    },
    {
        name:"LT402",
        isLightOn: false,
    },
    {
        name:"LT403",
        isLightOn: true,
    },
    ]
  return (
    <div className={styles.container}>
        <div className={styles.monitorHead} >
            <center><h1 className={styles.monitorHeading}>GreenLight Monitor System</h1>
            <hr
          style={{
            background: 'rgb(93, 226, 93)',
            color: 'rgb(93, 226, 93)',
            borderColor: 'rgb(93, 226, 93)',
            height: '0.1px',
            width: '55%',
          }}
        />
                <p className={styles.monitorPara}>Here is a list of all the classrooms. Their color depicts the status of the lights in the respective classroom:</p>
        </center>

        </div>
        <div className={styles.classrooms}>
            {/* LT101-3 */}
                <div className={styles.classroom}>
                    <Classroom classData={classRooms[0]}/>
                    <Classroom classData={classRooms[1]}/>
                    <Classroom classData={classRooms[2]}/>
                </div>
            {/*LT201-3  */}
                <div className={styles.classroom}>
                    <Classroom classData={classRooms[3]}/>
                    <Classroom classData={classRooms[4]}/>
                    <Classroom classData={classRooms[5]}/>

                </div>
            {/*LT301-3 */}
                <div className={styles.classroom}>
                    <Classroom classData={classRooms[6]}/>
                    <Classroom classData={classRooms[7]}/>
                    <Classroom classData={classRooms[8]}/>
                </div>
            {/*LT401-3  */}
                <div className={styles.classroom}>
                    <Classroom classData={classRooms[9]}/>
                    <Classroom classData={classRooms[10]}/>
                    <Classroom classData={classRooms[11]}/>
                </div>
        </div>
    </div>
  )
}
