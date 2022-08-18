import { useState } from "react"
const EditUser = ({user})=>{
let[firstName,setFirstName] =useState(user="")
const changeFirstName = (event)=>{
setFirstName(event.target.value)
if (firstName!=="") {
document.getElementById("isChange1").innerText="valueChange";
}
}
let[lastName,setLastName] =useState(user="")
const changeLastName = (event)=>{
    setLastName(event.target.value)
    if (lastName!=="") {
        document.getElementById("isChange2").innerText="valueChange";
        }

    }
let[age,setAge] =useState(user=0)
const changeAge = (event)=>{
    setAge(event.target.value)
    if (age!=="") {
        document.getElementById("isChange3").innerText="valueChange";
        }
    }
let[email,setEmail] =useState(user="")
const changeEmail = (event)=>{
    setEmail(event.target.value)
    if (email!=="") {
        document.getElementById("isChange4").innerText="valueChange";
        }
    }
let[passwod,setPassword] =useState(user="")
const changePassword = (event)=>{
    setPassword(event.target.value)
    if (passwod!=="") {
        document.getElementById("isChange5").innerText="valueChange";
        }
    }
const checkValues=()=>{
        if (firstName&&lastName&&age&&email&&passwod!=="") {
                alert("the form is ok");
            }else{
                alert("try again");
            }
}
return(
    <div>
        <h1>EDITING-USER-COMPONENT</h1>
    <input type="text" onChange={changeFirstName} placeholder="first name"/><br/>
    <span id="isChange1"></span><br/>
    <input type="text" onChange={changeLastName} placeholder="last name"/><br/>
    <span id="isChange2"></span><br/>
    <input type="number" onChange={changeAge} placeholder="age"/><br/>
    <span id="isChange3"></span><br/>
    <input type="email" onChange={changeEmail} placeholder="email"/><br/>
    <span id="isChange4"></span><br/>
    <input type="text" onChange={changePassword} placeholder="password"/><br/>
    <span id="isChange5"></span><br/>
    <h1>{firstName}</h1>
    <button onClick={checkValues}>PRINT-FORM</button>
    </div>
)
}
export default EditUser