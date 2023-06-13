import { RequestHandler } from "express";
import createUser from "../controllers/createUser";



const postUser: RequestHandler = async(req, res)=>{
    const {email, password} = req.body;
console.log(req.body);
   

    try {
        if(email && password) {
            const newUser = await createUser(email, password);
            console.log(newUser)
            return res.status(200).json(newUser);
        }
        return res.status(400).send("Faltan datos");
    } catch (error: any) {
        return res.status(500).json({error: error.message})
    }

}
export default postUser;