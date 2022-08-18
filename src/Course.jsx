import { useState } from "react";
import Student from "./Student";
import Teacher from "./Teacher";
const c = console.log;
const Course=()=>{
    let[students,setStudents]=useState(["abay","asaye","chen","lior","sara"])

    let[teacher,setTeacher]=useState({firstName:"N/A",lastName:"N/A"})
const changeState =()=>{
    setStudents([{fName:"",lName:"",age:0},{fName:"",lName:"",age:0},{fName:"",lName:"",age:0},{fName:"",lName:"",age:0}])
}
    let courseArray= ["programing","coding","devnet","qa","devops"]
    return(
        <div>
            <h1>COURSE-COMPONENT</h1>
        <h1>{courseArray}</h1>
        <hr />
        <Teacher teach={teacher}/>
        <button onClick={changeState}>CHANGE-STATE</button>
        <hr />
        <Student/>
        {
            students.map(()=>{
            })
        }
        </div>
    )
}
export default Course;
