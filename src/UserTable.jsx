import { useState } from "react"
const TableUser = ()=>{

let[array,setArray] = useState([]);
const addObjectsToArray = ()=>{
    const newArray = ["hello","world","abay"]
    setArray(newArray)
    // setArray(array[{df:"g"},{f:"g"},{ef:"g"},{dd:"g"}])
}
return(
    <div>
        <h1>USER-TABLE-COMPONENT</h1>
        {
            array.map((item)=>{
                <h1>{item}</h1>
            })
        }
        <button onClick={addObjectsToArray}>-CLICK-TO-ADD</button>
        <h1>
            ARRAY:{array}
        </h1>
    </div>
)
}
export default TableUser