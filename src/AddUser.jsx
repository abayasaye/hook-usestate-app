import { useState } from "react";

const AddUser = ()=>{

let[firstName,setFirstName] = useState("");

const changeFirstName = (event)=>{
    setFirstName(event.target.value)
}


let[lastName,setLastName] = useState("");

const changeLastName = (event)=>{
    setLastName(event.target.value)
}


let[age,setAge] = useState(0);
const changeAge = (event)=>{
    setAge(event.target.value)
}



let[email,setEmail] = useState("");
const changeEmail = (event)=>{
    setEmail(event.target.value)
}



let[password,setPassword] = useState("");
const changePssword = (event)=>{
    setPassword(event.target.value)
}



let[varificationPassword,setVarificationPassword] = useState("");

const changeVarificationPassword = (event)=>{
    setVarificationPassword(event.target.value)
    if (password===event.target.value) {
        document.getElementById("displayPassword").innerHTML="match"
    }else{
        document.getElementById("displayPassword").innerHTML="unmacth"
    }
}

const chechPasswords = ()=>{
    if(password===varificationPassword){
        alert("password match")
    }else{
        alert("paswords dosn't match")
    }
}



const tableForm = (event)=>{
    event.preventDefault()
    chechPasswords()
    document.getElementById("table").innerHTML+=`
    <table>
    <thead>
    <th>firstName</th>
    <th>lastName</th>
    <th>age</th>
    <th>email</th>
    <th>password</th>
    <th>varificationPassword</th>
    </thead>
    <tbody>
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${varificationPassword}</td>
    </tr>
    </tbody>
    </table>
    `
}




return(
    <div>
        <form action="" onSubmit={chechPasswords}>
        <p>{firstName}</p>
        <input type="text" onChange={changeFirstName} placeholder="enter first name" /><br />
        <input type="text" onChange={changeLastName} placeholder="enter last name" /><br />  
        <input type="number" onChange={changeAge} placeholder="enter age" /><br />
        <input type="email" onChange={changeEmail} placeholder="enter email" /><br />
        <input type="text" onChange={changePssword} placeholder="enter passwod" /><br />
        <input type="text" onChange={changeVarificationPassword} placeholder="varification password" /><br />
        <span id="displayPassword"></span>
        <button onClick={tableForm}>PRINT-FORM</button>
        </form>
        <div id="table">

        </div>
    </div>
)
}
export default AddUser