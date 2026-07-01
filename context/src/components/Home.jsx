import { useContext } from "react";
import UserContext from "../context/UserContext";

function Home(){
    const {id,name,city} = useContext(UserContext);
    return(
        <>
        <h1>Hi , id i {id}</h1>
        <h1>{name}</h1>
        <h1>{city}</h1>
        </>
    )
}

export default Home;