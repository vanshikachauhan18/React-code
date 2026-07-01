import Home from "./components/Home";
import UserContext from "./context/UserContext";

function App(){
 //let user = "John";
  return(
    <> 
    <UserContext.Provider value ={{
      name : "rohan" , age : 12, marks : 76
    }}>
      <Home></Home>
    </UserContext.Provider>
    </>
  )
}

export default App;