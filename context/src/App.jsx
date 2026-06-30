import Home from "./components/Home";
import UserContext from "./context/UserContext";

function App(){
 let user = "John";
  return(
    <> 
    <UserContext.Provider value ={user}>
      <Home></Home>
    </UserContext.Provider>
    </>
  )
}

export default App;