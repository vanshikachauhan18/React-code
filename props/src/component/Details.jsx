function Details(){

    let isLoggedIn =true;

    //if -else rendering
    //if(isLoggedIn){
       // return <h1>Welcome Back</h1>
    //}
    //return(
       // <h1>Register to the website</h1>
    //)

    //2nd ternary operator
   // let result = isLoggedIn ? 'Welcome Back' : 'Register to access website';
    //return (
      //  <>
        //<h1>{result}</h1>
        //</>
    //)

    //3rd method logical AND (only for true cases)
    return(
        <>
        {isLoggedIn && <h1>Welcome Back</h1>}
        </>
    )
}

export default Details;