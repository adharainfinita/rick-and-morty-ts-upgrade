import { RequestHandler } from "express";
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.API_URL;

const getCharById: RequestHandler = async(req, res)=>{
    console.log(URL);

    try {
    const {id} = req.params;
    const {data} = await axios(`${URL}/${id}`)

        const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            };
            return res.status(200).json(character);
    } 
    catch(error: any) {
        return error.message.includes("ID")
            ? res.status(404).json(error.message)
            :res.status(500).json(error.response.data.error)
    }
}

export default getCharById;