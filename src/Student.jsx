import { useState } from "react"
const Student = ()=>{
    let [firstName,setFirstName]=useState("N/A")
    let [lastName,setLastName]=useState("N/A")
    let [age,setAge]=useState("N/A")
    return(
        <div>
            <h1>STUDENT-COMPONENT</h1>
        </div>
    )
}
export default Student