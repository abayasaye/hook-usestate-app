import { useState } from "react"
const c=console.log;
const Teacher = ({teach})=>{
let [fName,setFname]=useState(teach.firstName);
let[lName,setLname]=useState(teach.lastName);
const changeToMyName=(event)=>{
    setFname(event.target.value="Abayneh")
}
const changeToMyLastName=(event)=>{
    setLname(event.target.value="Asaye")
}
const changeToUperCase=(event)=>{
    setFname("Abayneh")
    setLname(lName.toUpperCase())
}

    return(
        <div>
            <h1>TEACHER-COMPONENT</h1>
            <h2>
            firstName : {fName} <br />
            lastName : {lName}<br/>
            <button onClick={changeToMyName}>CHANGE-FIRST-NAME</button><br />
            <button onClick={changeToMyLastName}>CHANGE-LAST-NAME</button><br />
            <button onClick={changeToUperCase}>CHANGE-NAMES-UPERASE</button><br />
            </h2>
            <hr />
        </div>
    )
}
export default Teacher