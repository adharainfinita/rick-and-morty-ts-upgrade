import { RequestHandler } from "express";
import createFavorites from "../controllers/createFavorites";


const postFavorites:RequestHandler = async(req, res) =>{
    const {id, name, origin, status, image, species, gender,userId} = req.body;

    try {
        if(id){
            const newFavorite = await createFavorites({id, name, origin, status, image, species, gender, userId});
console.log(newFavorite);
            
            return res.status(200).json(newFavorite)
        }
        return res.status(401).send("Faltan datos");
    }catch(error: any) {
        return res.status(500).json({error: error.message});
    }
}

export default postFavorites