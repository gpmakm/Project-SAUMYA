import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../public/logooobbbb.png'
export const BottomNavigation = () => {
  return (
    <div>
      <nav>
        
        <ul>
          <span><img src={logo} id="collegelogo" alt="GEC Abad" width={70} height={70} /></span>
          <NavLink to="/" className={(elem) => { return elem.isActive ? "activeBar" : "" }}> <li>Home</li></NavLink>
          <NavLink to={"/DSA-lab-attendance"} className={(elem) => { return elem.isActive ? "activeBar" : "" }}><li>DSA attendance</li></NavLink>
          <NavLink to={"/OOPS-lab-attendance"} className={(elem) => { return elem.isActive ? "activeBar" : "" }}><li>OOPS attendance</li></NavLink>

          <NavLink to={"/AEC-lab-attendance"} className={(elem) => { return elem.isActive ? "activeBar" : "" }}><li>AEC attendance</li></NavLink>
          <NavLink to={"/professor-registration"} className={(elem) => { return elem.isActive ? "activeBar" : "" }}> <li>Professor registration</li> </NavLink>
          <NavLink to={"/download-attendance-data"} className={(elem) => { return elem.isActive ? "activeBar" : "" }}> <li>Get attendance data</li> </NavLink>
        </ul>
      </nav>
    </div>
  )
}

//className={"activeBar"} 


// 
/*(elem)=>{
  return elem.isActive?"activeBar":"";
 
  }*/


/*
(elem)=>{
   return 
  if(elem.isActive){
      classList.add("activeBar");
  }
  else{
      classlist.add("");
  }
}
 
*/
//WAP if even then log even num else odd num
//num%2==00?console.log("Even"):console.log("Odd");
