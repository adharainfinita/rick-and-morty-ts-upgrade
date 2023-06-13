import Favorites from "../models/Favorites";

const removeFav = async(id:string)=>{
    const char = await Favorites.findByPk(id);
    if(char){
        await Favorites.destroy({
            where: {
                id
            }
        });
    }
    
    return await Favorites.findAll();
} 
export default removeFav;