
import { RequestHandler } from "express";
import findAllFavorites from "../controllers/findAllFavorites";


const getFavorites: RequestHandler = async(req, res)=>{
    const {userId} = req.params
    try {
        const favorites = await findAllFavorites(userId);
            return res.status(200).json(favorites);
    } catch (error: any) {
        return res.status(500).json({error: error.message});
    }
}

export default getFavorites;