import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../store";
import { addFav, removeFav } from "../features/favoritesSlice";
import { URL_BASE, URL_FAVORITES } from "../utils/api";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Card.module.css";


interface CardProps {
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
    image: string;
    id: number;
    onClose: Function 
  }

export const Card = ({name, status, species, gender, image, origin, id, onClose}: CardProps) =>{
   const dispatch = useDispatch();
   const myFavorites = useSelector((state:RootState) => state.favorites.value);
   const user = useSelector((state:RootState) => state.user.value);
   const userId: number = user.id;
   const location = useLocation();

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
        const response = await axios.delete(`${URL_BASE}${URL_FAVORITES}/${id}`);
        dispatch(removeFav(response.data))
        } catch (error) {
         console.log(error);
         
        }
      }
      else{
         setIsFav(true);
         try {
         const response = await axios.post(URL_BASE+URL_FAVORITES, fav);
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
        <div className={styles.card}>
              <section className={styles.top}>
               <h4 className={styles.text}>Card N°{id}</h4>
             <button hidden={location.pathname === "/favorites" ? true : false} onClick={()=>onClose(id)} className={styles.closer}>X</button> 
            </section>
            <section className={styles.center}>
               <div className={styles.likeImg}>
               <img src={image} alt='Not conection'/> 
               {isFav ? (<button className={styles.favButton} onClick={handleFavorite}>❤️</button>) : 
            (<button className={styles.favButton} onClick={handleFavorite}>🤍</button>)}
            </div>
            </section>
         <section className={styles.bottom}>
            <Link  to={`/detail/${id}`}>Detail</Link>
            <h2 className="name">{name}</h2>
            <h2 className="name">{origin}</h2>
            
        
         </section>
        </div>
    )
}