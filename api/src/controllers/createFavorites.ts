import Users from "../models/User";
import Favorites from "../models/Favorites";

interface character {
    id: number;
    name: string,
    origin:  string,
    status: string,
    image: string,
    species: string,
    gender: string,
    userId: number
}

const createFavorites= async({id, name, origin, status, image, species, gender, userId}: character) =>{
   const favorite =  await Favorites.create({
    id,
    name,
    origin,
    status,
    image,
    species,
    gender
   });
   const user = await Users.findByPk(userId);
   if (user) {
     await favorite.addUser(user);
   }
   return favorite;
}

export default createFavorites;