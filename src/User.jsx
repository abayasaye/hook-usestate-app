import { useState } from "react"
import AddUser from "./AddUser"
import EditUser from "./EditUser"
const changeComponents = (event)=>{
    if(event){
        return(
            <AddUser/>

        )
    }
}
const User= ()=>{
return(
    <div id="div_con">
        <h1>user-component</h1>
        <AddUser/>
        <hr />
        <EditUser/>
        <button onClick={changeComponents}>CLICK-TO-CHANGE</button>
    </div>
)
}

export default User