import { useState} from "react"
import { FormValues } from "./SignOn";
import getRandomName from "../utils/randomizer";
import { addUser} from "../features/userSlice";
import { URL_BASE, URL_LOGIN } from "../utils/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import swal from 'sweetalert';
// import { ButtonList } from "sweetalert/typings/modules/options/buttons";

export const SignUp = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [userData, setUserData] = useState<FormValues>({
        email: "",
        password: ""
    });

    const [count, setCount] = useState(0);
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.currentTarget;
        let touchValue: undefined | string = undefined
        if(!value.includes("@")) {
            touchValue = value+"@localmail.com"
        }
        setUserData({
            ...userData,
            [name]: touchValue ? touchValue : value
        })
        setCount(count+2)
    }

    const createAccount = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { name, value } = event.currentTarget;
      
        if (name === "email") {
          if (value === "manual") {
            setCount(count + 1);
          } else {
            if(value==="automatic") setCount(count + 2);
                if(value==="ENG"){
                    const myEmail = getRandomName("ENG");
                    setUserData({
                        ...userData,
                        email: myEmail + "@localmail.com"
                      });
                      setCount(count+1)
                }
                if(value === "SPA"){
                    const myEmail = getRandomName("SPA");
                    setUserData({
                        ...userData,
                        email: myEmail + "@localmail.com"
                      });
                      setCount(count+1)

                }
          }
        } if(name==="password"){
           if(count===5) setCount(count+1);
           else{
                const myPassword = getRandomName("SPA");
                setUserData({
                ...userData,
                password: myPassword + String(Math.floor(Math.random()*99))
                })
            }
           setCount(count+1)
        }
      };
      
      const handleOnSubmit = async(event: React.FormEvent) =>{
        event.preventDefault;
        const {email, password} =  userData
        try {
            const response = await axios.post(URL_BASE+URL_LOGIN, {
                email,
                password
            });
            console.log(response.data);
            if(response.data){
                dispatch(addUser({
                    id: response.data.id,
                email: response.data.email,
                password: response.data.password,
                access: false
                }))
                navigate("/")
            }
        } catch (error) {
        console.log(error);
            
        }
      }

      
    
    return (
        <form  onSubmit={handleOnSubmit}>
            
            {count === 0 && (
                <>
                <h1> ¿Deseas escribir un nombre o prefieres que escoja uno aleatorio? </h1>  
                <button name="email" value="manual" onClick={createAccount}>Quiero escribir</button>
                <button name="email" value="automatic" onClick={createAccount}>Elige por mí</button>
                </>
                )}
            {count ===1 && <input placeholder="escribe algo" name="email" onChange={handleOnChange}></input>}
            {count ===2 && 
            <>
            <button name="email" value="ENG" onClick={createAccount}>Inglés</button>
            <button name="email" value="SPA" onClick={createAccount}>Español</button>
            </> } 
            {count ===3 && (
                <>
                <h4>{userData.email}</h4>
                <button name="password" onClick={createAccount}>Me gusta</button>
                <button onClick={()=>setCount(count-3)} >Obtener otro</button>
                </>
            )}
            {count===4 && 
            <button name="password" onClick={createAccount}>Obtener contraseña</button>
            }
            {count ===5 && 
                ( <>
                <p> email: {userData.email}</p> <hr />
                <p> password: {userData.password} </p>
                <button type="button" onClick={handleOnSubmit}>Crear cuenta</button>
                <button onClick={()=>setCount(count-4)} >Volver atrás</button>
                </>)
            }


        </form>
    )
} 