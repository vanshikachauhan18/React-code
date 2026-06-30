import { useNavigate } from "react-router-dom";

function About(){
  const navigate = useNavigate();


  return(
    <>
    <h1>This is the About page</h1>
    <button onClick={() => navigate('/')}>Go back to home page</button>
    <button onClick={() => navigate('/about/contact')}>Go back to contact page</button>
    </>
  )
}

export default About;