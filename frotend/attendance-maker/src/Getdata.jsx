import React from 'react'
import { useState } from 'react'
const Getdata = () => {
  const [text, settext] = useState('')
  const makeUppercase=(e)=>{
    let data=e.target.value
    settext(data.style.textTransform="uppercase");
  }
  return (
    <form action="http://localhost:3000/download-attendance-data" method="post">
        <div><input type="text" name="userId" id="" className="field" placeholder='Enter your username' required /></div>
        <div><input type="password" name="passw" id="" className="field" placeholder='Enter your password' required/></div>
        <div><input type="text" name="subject" id="" className="field" placeholder='Enter your subject name' onKeyDown={makeUppercase} required/></div>
        <button>Get data</button>
    </form>
  )
}

export default Getdata