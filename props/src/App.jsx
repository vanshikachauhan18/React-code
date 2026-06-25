import Student from "./component/Student";
import Product from "./Data/Product";
import Details from "./component/Details";

function App(){
  let arr =["A","B","C","D","E"];
  return(
    <>
    <Student name ="ABC" age = "23"/>
    {/*list rendering*/}
    {arr.map((letter) =>(
      <h1>{letter}</h1>
    ))}

    {Product.map((Product) => (

      <div>
        <h3>{Product.name}</h3>
        <p>Price: {Product.price}</p>
        <p>Description: {Product.desc}</p>
      </div>
    ))}
    <Details/>
    </>
  )
}

export default App;
