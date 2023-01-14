import React, { useEffect, useState, useContext, useRef } from 'react'
import { CLOSING } from 'ws';
import styles from "../Style/classrooms.module.css"
import Classroom from "./classroom"
import AuthContext from "../../../store/auth-context"
import { Link } from "react-router-dom";

function Classrooms() {
    class myclassRooms {
        constructor(name, cam_url,status) {
            this.name = name;
            this.cam_url = cam_url;
            this.isLightOn = status
        }
    }

    const [classRooms, setclassRooms] = useState([]);
    const effectRan = useRef(false);
    useEffect(() => {
        const interval = setInterval(()=>{
        if (effectRan.current === false) {
            const fetchData = () => {
                return fetch("https://run.mocky.io/v3/f8285463-7b6c-48d2-9ca3-56201bd19f8e", { method: "GET" }
                )
                    .then(res => {
                        return res.json();
                    })
                    .then((data) => {
                        var m = data.length;
                        setclassRooms([]);
                        for (var i = 0; i < m; i++) {
                            let iclass = new myclassRooms(data[i].name, data[i].cam_url, data[i].status);
                            setclassRooms(classRooms => [...classRooms, iclass]);
                        }
                    })

            };
            fetchData();
        }
        return  () =>{
            effectRan.current=true;
        }},5000);
        
    }, []);
    const authCtx = useContext(AuthContext)
    return (
        <>
        <div className={styles.logout}>
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <a className={styles.logoutLink} >
            <Link  onClick={authCtx.logout} to="/"  >LOGOUT</Link> 
            </a>
        </div>
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
            <div className={styles.classes}>
                <div className={styles.classrooms}>
                    {classRooms.length === 0 ? "No Todos Left" :
                        classRooms.map((classroom) => (
                            <div id={classroom.name}>
                                <Classroom classroom={classroom} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <center>
            <div className={styles.addRoom}>
                <a className={styles.addRoomLink} href="#">Add Room +</a>
            </div>
            </center>
        </div>
        </>
    )
}
export default Classrooms;
