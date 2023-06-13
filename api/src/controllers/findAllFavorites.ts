import Favorites from "../models/Favorites"

const findAllFavorites = async(userId: string) =>{
    return await Favorites.findAll({
        where: {
            id: userId
        }
    });
}
export default findAllFavorites