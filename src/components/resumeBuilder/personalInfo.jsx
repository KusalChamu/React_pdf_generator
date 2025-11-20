import { useState } from "react"

export default function PersonalInfo({onAdd}){

    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const handleAdd = () =>{
        onAdd(value,value1,value2)
        setValue(""),setValue1(""),setValue2("")
    }

    return(
        <div>
            <input 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="Name"
            ></input>
            <input 
            type="number"
            value={value1}
            onChange={(e)=>setValue1(e.target.value)}
            placeholder="Age"
            ></input>
            <input 
            value={value2}
            onChange={(e)=>setValue2(e.target.value)}
            placeholder="Address"
            ></input>
            <button onClick={handleAdd}>Add</button>


        </div>
    )
}