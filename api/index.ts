
import server from "./src/app";
import conn from "./src/DB_conection"


const PORT = process.env.PORT || 3001;

conn.sync({alter: true}).then(()=>{
    server.listen(PORT, ()=>{
    console.log(`Server raised on port ${PORT}♥`);
})
}).catch((error: any)=>{
    console.log(error.message);
  });

