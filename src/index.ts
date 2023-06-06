import express from "express";
const server = express();

server.use(express.json());

const PORT = 3000;

server.get("/tin", (_req, res) =>{
    console.log("konichiwa " + new Date().toLocaleDateString());
    res.send("tong")
});

server.listen(PORT, ()=>{
    console.log("Server raised on port 3001♥");
})