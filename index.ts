import express from "express";
const server = express();

server.use(express.json());
const PORT = process.env.PORT || 3000;
const db =  require("./models");

db.sequelize.sync().then(()=>{
    server.listen(PORT, ()=>{
    console.log(`Server raised on port ${PORT}♥`);
})
})

