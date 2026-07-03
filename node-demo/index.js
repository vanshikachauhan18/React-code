const fs = require('fs');

fs.writeFileSync("text.txt","Good morning");
let data = fs.readFileSync("text.txt", "utf-8");
console.log(data);


const http  = require('http');
const server = http.createServer(()=>{
    console.log("Server Running")
})

server.listen(5000);