function Student(props){           //function Student({name,age}){}
    return(
        <>
        <h1>Hi , my name is {props.name}</h1>         
        <h2>My age is {props.age}</h2>
        </>
    )                 //{name},{age}
}

export default Student;