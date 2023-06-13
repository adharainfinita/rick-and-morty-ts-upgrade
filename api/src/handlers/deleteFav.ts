import { RequestHandler } from "express";
import removeFav from "../controllers/removeFav";


const deleteFav: RequestHandler = async(req, res)=>{
    const {id} = req.params;
    try {
        const response = await removeFav(id);
            return res.status(200).json(response);
    } catch (error: any) {
        return res.status(500).json({error: error.message});
    }
}

export default deleteFav;