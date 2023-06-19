import routes from "./routes/index";
import express, {Request,  Response, NextFunction } from 'express';
import morgan from 'morgan';


const server = express();

server.use(morgan('dev'));
server.use(express.json());


server.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', 'rick-and-morty-ts-upgrade-production.up.railway.app');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
})


server.use("/rickandmorty", routes);

server.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });


export default server;
