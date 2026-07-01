import { useContext } from "react";
import UserContext from "../context/UserContext";

function Home(){
    const {name,age,marks} = useContext(UserContext);
    return(
        <>
        <h1>Hi , name is {name}</h1>
        <h1>{age}</h1>
        <h1>{marks}</h1>
        </>
    )
}

export default Home;