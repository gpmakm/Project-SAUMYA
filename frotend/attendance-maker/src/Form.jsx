import { useState } from "react";

export default function Form(props) {
    const [name,setName]=useState('')
    const [regno,setRegno]=useState('')
    const [roll,setRoll]=useState('')
   
    return (
        <>

            <form  action={props.url} method="post">
                <h2>{props.formTitle}</h2>
                <label htmlFor="subject">Subject</label>
                <div className="data">
                    <input type="text" name="subject" id="subject" className="field" value={props.subject}/>
                </div>
                <label htmlFor="studName">Enter name</label>
                <div className="data">
                    <input type="text" name="student_name" id="studName" className="field" placeholder="Example: Akarsh Kumar Mishra"
                    value={name} onChange={(d)=>{setName(d.target.value)}} required/>
                </div>
                <label htmlFor="studId">Enter registration number</label>
                <div className="data">
                    <input type="text" name="regno" id="studId" className="field" placeholder="Example: 2513xxxx" value={regno} onChange={(d)=>{setRegno(d.target.value)}} required/>
                </div>
                <label htmlFor="studEroll">Enter roll number</label>
                <div className="data">
                    <input type="text" name="roll" id="studERoll" className="field" placeholder="Example: 601457xxxy"
                    value={roll} onChange={(d)=>{setRoll(d.target.value)}} required/>
                </div>
                <button type="submit" >Submit</button>
            </form>
        </>
    )
}