import { useState } from "react";

export default function Skills({onAdd2}) {
    const [value, setValue] = useState("");

    const handleAdd = () =>{
        onAdd2(value)
        setValue("")
    }
    return(
        <div>
            <input 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder="skills"
            ></input>
            <button onClick={handleAdd}>add</button>
        </div>
    )
}