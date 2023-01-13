import React, { useEffect, useState } from 'react'
import { CLOSING } from 'ws';
import styles from "../Style/classrooms.module.css"
import Classroom from "./classroom"

function Classrooms() {
    class myclassRooms {
        constructor(name, cam_url) {
            this.name = name;
            this.cam_url=cam_url;
            this.isLightOn=true
        }
    }
    
    // let classRooms = [{
    //     name:"ffjgj",
    //     cam_url:"",
    //     isLightOn:"false"

    // },]
    // const [classRooms, setTheArray] = useState([]);
    const [classRooms, setMyArray] = useState([]);

    useEffect(() => {
        fetch("https://run.mocky.io/v3/f6ca00d3-c012-448d-b738-6148833d4293")
        .then((response) => response.json())
        .then(function (data) {
            var m = data.length;
            for (var i = 0; i < m; i++) {
                let iclass = new myclassRooms(data[i].name,data[i].cam_url);
                // console.log(iclass)
                // setTheArray(classRooms=>[...classRooms, iclass]);
                // setTheArray(classRooms => [...classRooms, {currentOrNewKey: iclass}]);
                setMyArray(classRooms => [...classRooms, iclass]);
                // console.log(classRooms[i+1].name)
            }
            
        })
        
       }, []);

    
    
   
    // const fetchData = () => {
    //     return fetch("https://run.mocky.io/v3/477360e2-57f4-4bba-958a-94e869f7eeb1")
    //         .then((response) => response.json())
    //         .then(function (data) {
    //             // This is the JSON from our response
    //             console.log(data);
    //             // console.log(data.room[0]);
    //             n = data.room.length
    //             console.log(n)
    //             sArray = []
    //             nArray = []
    //             for (var i = 0; i < data.room.length; i++) {
    //                 sArray.push(data.status[i]);
    //                 nArray.push(data.room[i]);
    //                 setMe(data.status[i])
    //             }
    //         })
            
    // }
    
    

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         fetchData();
    //     }, 15000);
    // }, [])
      useEffect(() => {
        
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
    
                </center>

            </div>
            <div className={styles.classes}>
                <div className={styles.classrooms}>
                    {classRooms.length === 1 ? "No Todos Left" :
                        classRooms.map(classroom => {
                            return (
                                <div className={styles.class}  >
                                    <Classroom classroom={classRooms} />
                                    
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
