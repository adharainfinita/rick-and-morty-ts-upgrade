import { useSelector} from "react-redux";
import { RootState } from "../store";
import { Card } from "./Card";
import { useDispatch } from "react-redux";
import { filterFav, orderFav, getAllFav } from "../features/favoritesSlice";
import {useEffect} from "react";
import { URL_BASE, URL_FAVORITES } from "../utils/api";
import "../styles/Favorites.css";
import { removeCharacter } from "../features/charactersSlice";

export const Favorites = () =>{
    const dispatch = useDispatch();
    const myFavorites = useSelector((state:RootState) => state.favorites.value);
    const userID = useSelector((state:RootState) => state.user.value.id)
  
    const onClose =(id:any)=>{
        dispatch(removeCharacter(id))
    }
    useEffect(()=>{
            fetch(`${URL_BASE}${URL_FAVORITES}/${userID}`)
            .then(response => response.json())
            .then(data => dispatch(getAllFav(data)))
    }, [dispatch, userID])
    

        const handleOrderAndFilter=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        const {name, value} = event.target

            if(name === "order"){
                dispatch(orderFav(value));
            // setAux(true);
            }
            else{
                dispatch(filterFav(value));
            }
        }

        return (
            <main>
                <select className="options" name="order" onChange={handleOrderAndFilter} >
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select className="options" name="filter" onChange={handleOrderAndFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
                <div>{myFavorites.map((char)=>{
                    return (
                    <div id="fav">
                        <Card
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            status={char.status}
                            species={char.species}
                            gender={char.gender}
                            origin={char.origin}
                            image={char.image}
                        onClose={onClose}
                        />
                    </div>
        
                )})}</div>
            </main>
        )
}