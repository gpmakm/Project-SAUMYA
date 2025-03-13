import { useState } from "react";

export default function Homepage(props){
    const [count,setCount]=useState(0);
    return(
        <>
        
        <h1 id="heading">{props.pageTitle}
            <br />
            <span id="projectName">{props.fullForm}</span>
        </h1>
        <div id="imageSet">
            <img src="/public/favicon.png" alt="SAUMYA logo" width={200} height={200} />
            <img src="/public/MongodbPic2.jpeg" alt="Mongodb" width={300} height={200}/>
        </div>
        <div className="paragraph">
            <p>
                Welcome to the most advanced and digital platform to make college attendance for wherever to store your data. <br />
                You can use it for many aspects like to make attendance of such persons who have submitted their assignments, practicals, agendas and more.
            </p>
        </div>
    
        </>
    )
}
//Project SAUMYA=> Systematic Arrangement Utlilizer
// Save, Sort, Display, Arrangement
// Software for Attendance  utility with MongoDb bY Akarsh