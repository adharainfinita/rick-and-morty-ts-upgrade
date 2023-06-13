import { Card } from "./Card";
import {useSelector} from "react-redux";
import { RootState } from "../store";
import { Character } from "../features/charactersSlice";

export const Cards: React.FC = ()=>{
   const characters = useSelector((state: RootState) => state.characters.value);


   const pjs = characters?.map((char: Character) =>{
        return (
            <Card
            key={char?.id}
            id={char?.id}
            name={char?.name}
            status={char?.status}
            species={char?.species}
            gender={char?.gender}
            origin={char.origin?.name}
            image={char?.image}
            />
    )})

    return (
        <div>
            {pjs}
        </div>
    )
}