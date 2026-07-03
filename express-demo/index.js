import express from 'express';

const app = express();

app.get('/',((req,res) =>{
    res.send("<h1>Hello World</h1>");
    
}));
app.get('/student',((req,res) =>{
    
    res.json({name :"abc",city:"city",age:20})
}));

app.listen(3000, () =>{
    console.log("Server is running on the port");
})