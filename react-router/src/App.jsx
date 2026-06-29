import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App(){

  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = '/' element={<Home/>}></Route>
      <Route path = '/about' element={<About/>}></Route>
      <Route path = '/about/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;