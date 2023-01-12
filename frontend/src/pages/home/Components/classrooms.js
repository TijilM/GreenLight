import React, { useEffect, useState } from 'react'
import { CLOSING } from 'ws';
import styles from "../Style/classrooms.module.css"
import Classroom from "./classroom"

function Classrooms() {
    const classRooms = [{
        name: "LT101",
        isLightOn: false,
    },
    {
        name: "LT102",
        isLightOn: false,
    },
    {
        name: "LT103",
        isLightOn: false,
    },
    {
        name: "LT201",
        isLightOn: false,
    },
    {
        name: "LT202",
        isLightOn: false,
    },
    {
        name: "LT203",
        isLightOn: false,
    },
    {
        name: "LT301",
        isLightOn: false,
    },
    {
        name: "LT302",
        isLightOn: false,
    },
    {
        name: "LT303",
        isLightOn: false,
    },
    {
        name: "LT401",
        isLightOn: false,
    },
    {
        name: "LT402",
        isLightOn: false,
    },
    {
        name: "LT403",
        isLightOn: false,
    },
    ]
    const [color, setColor] = useState([]);
    var [me, setMe] = useState([true]);
    const fetchData = () => {
        return fetch("https://run.mocky.io/v3/477360e2-57f4-4bba-958a-94e869f7eeb1")
            .then((response) => response.json())
            .then(function (data) {
                // This is the JSON from our response
                console.log(data);
                // console.log(data.room[0]);
                const n = data.room.length
                console.log(n)
                for (let i = 0; i < n; i++) {
                    if (data.room[i] === "false")
                        setMe(true);
                    else
                        setMe(false);
                }

            });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 5000);
    }, [])


   

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
                    {/* <h1>Counter: {counter}</h1> */}
                </center>

            </div>
            <div className={styles.classes}>
                {/* LT101-3 */}
                <div className={styles.classrooms}>
                    {classRooms.length === 0 ? "No Todos Left" :
                        classRooms.map(classroom => {
                            return (
                                <div className={styles.class}  >
                                    <Classroom classroom={classroom}/>
                                </div>
                                )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Classrooms;
