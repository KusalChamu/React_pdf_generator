import { useState } from "react";

export default function Project ({onAdd1}){
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const handleAdd = () =>{
        onAdd1(value,value1,value2)
        setValue(""),setValue1(""),setValue2("")
    }

    return(
        <div>
            <input 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="Title"
            ></input>
            <input 
            value={value1}
            onChange={(e)=>setValue1(e.target.value)}
            placeholder="Description"
            ></input>
            <input 
            value={value2}
            onChange={(e)=>setValue2(e.target.value)}
            placeholder="Tech"
            ></input>

            <button onClick={handleAdd}>Add</button>
        </div>
    )
}