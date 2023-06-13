import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../store";
import { addFav, removeFav } from "../features/favoritesSlice";
import { URL_FAVORITES } from "../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";
// import  "../styles/Card.css";

interface CardProps {
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
    image: string;
    id: number;
  }

export const Card = ({name, status, species, gender, image, origin, id}: CardProps) =>{
   const dispatch = useDispatch();
   const myFavorites = useSelector((state:RootState) => state.favorites.value);
   const user = useSelector((state:RootState) => state.user.value);
   const userId: number = user.id;


   const [isFav, setIsFav]= useState(false);

   useEffect(()=> {
      myFavorites.forEach((fav)=> {
         if(fav.id === id) {
         setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   const handleFavorite= async()=>{
      const fav = {name, status, species, gender, origin, image, id, userId}
      if(isFav){
         setIsFav(false);
         // notification();
        try {
        const response = await axios.delete(`${URL_FAVORITES}/${id}`);
        dispatch(removeFav(response.data))
        } catch (error) {
         console.log(error);
         
        }
      }
      else{
         setIsFav(true);
         try {
         const response = await axios.post(URL_FAVORITES, fav);
         console.log(response.data);
         dispatch(addFav(response.data))
         } catch (error) {
            console.log(error);
            
         }
         // notification()
         
         // dispatch(addFav(response.data));
      }
   }

    return (
        <div>
              <section id="top">
               <h4 className="text">Card N°{id}</h4>
            {/* <button onClick={()=>onClose(id)} className="closer">X</button> */}
            </section>
            <section id="center">
               <div className="like-img">
               <img src={image} alt='Not conection' className="img"/> 
               {isFav ? (<button className="favButton" onClick={handleFavorite}>❤️</button>) : 
            (<button className="favButton" onClick={handleFavorite}>🤍</button>)}
            </div>
            </section>
         <section id="bottom">
            <Link to={`/detail/${id}`}>Detail</Link>
            <h2 id="name">{name}</h2>
            <h2 id="name">{origin}</h2>
            
        
         </section>
        </div>
    )
}