import { useRef } from 'react';

function Form() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    function handleSubmit(){
        alert(`Name is ${nameRef.current.value} and email is ${emailRef.current.value}. Your form is submitted`)
        
        nameRef.current.value = "";
        emailRef.current.value = "";
    }

    return (
        <>
            <form action={handleSubmit}>
                <input type="text" placeholder="Enter name" ref={nameRef}></input><br />

                <input type="email" placeholder="Enter email" ref={emailRef}></input><br />

                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default Form;