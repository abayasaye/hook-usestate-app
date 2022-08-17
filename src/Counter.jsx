import { useState } from "react"
 const Counter= ({num})=>{
let [counter,setCounter]= useState(num);
const counterUp = ()=>{
    setCounter(counter+1)
    if (counter%3===0) {
        document.getElementById("boom").innerHTML+="boom <br/>"
    }
}
const counterDown = ()=>{
    setCounter(counter-1)
}
const counterReset = ()=>{
    setCounter(counter=0)
}
return(
    <div>
        <h1>counter : {counter}</h1>
        <h1 id="boom"></h1>
        <button onClick={counterUp}>counterUp</button>
        <button onClick={counterDown}>counterDown</button>
        <button onClick={counterReset}>counterReset</button>
    </div>
)
}
export default Counter