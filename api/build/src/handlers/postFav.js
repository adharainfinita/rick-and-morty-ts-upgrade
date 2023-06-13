"use strict";
// import { RequestHandler } from "express";
// const {Favorite} = require ("../DB_connection");
// const postFav: RequestHandler = async(req, res)=>{
//     const {id, name, origin, status, image, species, gender} = req.body;
//     try {
//         if(id){
//             const character = {
//                 id,
//                 name,
//                 origin,
//                 status,
//                 image,
//                 species,
//                 gender,
//             };
//             await Favorite.create(character);
//             const favorites = await Favorite.findAll();
//             return res.status(200).json(favorites)
//         }
//         return res.status(401).send("Faltan datos");
//     }catch(error: any) {
//         return res.status(500).json({error: error.message});
//     }
// }
// export default postFav;
