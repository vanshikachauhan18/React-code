import express from 'express';

const app = express();

app.use((req,res,next) => {
    console.log("running");
    next();
})
app.get('/',((req,res) =>{
    res.send("<h1>Hello World</h1>");
    
}));
app.get('/student',((req,res) =>{
    res.json({id :1, name :"abc",city:"city",age:20})
}));

app.get("/profile", (req, res) => {
  res.status(200).send("this is a profile page");
});

app.listen(3000, () =>{
    console.log("Server is running on the port");
})