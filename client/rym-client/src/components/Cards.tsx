import { Card } from "./Card";
import {useSelector, useDispatch} from "react-redux";
import { RootState } from "../store";
import { Character } from "../features/charactersSlice";
import styles from "../styles/Cards-styles.module.css";
import swal from "sweetalert";
import { removeCharacter } from "../features/charactersSlice";

export const Cards: React.FC = ()=>{
   const characters = useSelector((state: RootState) => state.characters.value);
   const dispatch = useDispatch();


   const pjs = characters?.map((char: Character) =>{
    const onClose =(id:number)=>{
        swal({
           title: '¿Deseas eliminar la carta?',
           text: "Este cambio es irreversible",
           icon: "warning", 
           buttons: ["Cancelar", "Aceptar"],
           dangerMode: true,
        })
        .then((willDelete)=>{
           if(willDelete) {
              dispatch(removeCharacter(id))
              swal("¡La carta ha sido eliminada!",{
                 icon: "success",
              });
           } 
           else{
              swal("¡WUBA LUBA DUB DUB!");
           }
        });
     }
    
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
            onClose={onClose}
            />
    )})

    return (
        <div className={styles.Cards}>
            {pjs}
        </div>
    )
}