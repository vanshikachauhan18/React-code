import { useState } from "react";

function Form(){
    const[name,setName] = useState("");
    const[Age,setAge] = useState("");
    return(
        <>
        <label> Name:</label>
        <input 
        type ="text"
        value ={name}
        onChange = {(e) => setName(e.target.value)}></input>
        <h1>{name}</h1>
        <label>Age:</label>
        <input 
        type ="number"
        value={Age}
        onChange = {(e) => setAge(e.target.value)}></input>
        <h1>{Age}</h1>
        </>
    )
}

export default Form;