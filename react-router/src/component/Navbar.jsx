import {Link} from 'react-router-dom';

function Navbar(){

  return(
    <>
    <Link to = '/'>Home</Link>
    <Link to = '/about'>About us</Link>
    <Link to = '/about/contact'>Contact</Link>
    <h1>This is the navbar</h1>
    </>
  )
}

export default Navbar;