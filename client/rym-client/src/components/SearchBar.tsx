import {useState} from "react";
import {useDispatch} from "react-redux";
import { addCharacter } from "../features/charactersSlice";
import axios from "axios";
import { URL_CHARACTER } from "../utils/api";
import "../styles/SearchBar-Styles.css";
import swal from "sweetalert";


export const SearchBar: React.FC = ()=>{
    const dispatch = useDispatch();
    const [id, setId] = useState("");
   
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
       setId(event.target.value)
    }

    const fetchData = async(id:string) =>{
        return await axios(`${URL_CHARACTER}/${id}`)
    }

    const onSearch = async(id:string)=>{
        try {
             if(Number(id) < 827){ 
               
               const response = await fetchData(id);
            
               dispatch(addCharacter(response.data));

            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            const errorMessage = error.response
            ? error.response.data.error
            : error.message;
            console.log(errorMessage);
            
            swal('¡WUBA LUBA DUB DUB!','¡No hay personajes con este ID!', 'error');
        }
       
        // else swal('¡WUBA LUBA DUB DUB!','¡No hay personajes con este ID!', 'error');
     }

     const getRandomCharacter = async()=>{

      const randomNumber = Math.floor(Math.random()* 826);
      
      const response = await fetchData(String(randomNumber));
      
      dispatch(addCharacter(response.data));
   }

    return (
        <div className="bar">
           <section className="section">
           <input id="input" type='search' placeholder="Busca un personaje" 
           onChange={handleChange} value={id}/>
           <button id="button1" onClick={() => {onSearch(id); setId("")}}>+</button>
           </section>
           <section className="section">
              <button id="buttonRandom" onClick={getRandomCharacter} >
              <img id="image" src="https://cdn-icons-png.flaticon.com/512/246/246569.png"/>
           </button>
           </section>
           
        </div>
     );
}