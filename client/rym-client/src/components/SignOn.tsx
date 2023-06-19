import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate, Link } from "react-router-dom";
import { addUser, authorizeUser } from "../features/userSlice";
import axios from "axios";
import { URL_BASE, URL_LOGIN } from "../utils/api";
import validate from "../utils/validate";
import styles from "../styles/Login.module.css"

export interface FormValues {
    email: string;
    password: string;
}



export const SignOn: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   const user = useSelector((state:RootState) => state.user.value)

  const [showPassword, setShowPassword] = useState(false);
  const [localController, setLocalController] = useState(false);
    const [userData, setUserData] = useState<FormValues>({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState<FormValues>({
      email: "",
      password: ""
    });

    useEffect(()=>{
        if(user.access){
         localController && navigate("/title");
        } 

    },[user.access, navigate, localController])

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const {name, value} = event.target
        setUserData({
            ...userData,
          [name]: value
        });
          
        setErrors(
        validate({
            ...userData,
            [name]: value
        }));
    }  

    const handleOnSubmit = async(event: React.FormEvent) => { 
        event.preventDefault();
        const {email, password} = userData
      try{
        const response = await axios(`${URL_BASE}${URL_LOGIN}?email=${email}&password=${password}`);
        console.log(response.data);
        
        if(response.data){
            dispatch(addUser({
                id: response.data.id,
                email: response.data.email,
                password: response.data.password,
                access: false
            }))
            
            dispatch(authorizeUser(true))
            
          setLocalController(true);
        }     
     }catch(error){
        console.log(error);
        
    //  swal("¡ADVERTENCIA!","Los datos no coinciden con la base de datos", "error")
  }
    }
    const handleShowPassword = () => { 
      setShowPassword(!showPassword); 
    };
    
    return (
        <div>
      <form className={styles.form}  onSubmit={handleOnSubmit}>
        <h1 className={styles.title}>Ingresar a la App</h1>
        <section className={styles.section}>
          <label className={styles.label} htmlFor="email">Email: </label>
        <input
           className={styles.input}
            name="email"
            type="email"
            placeholder="Ingrese su email"
            onChange={handleOnChange}
            defaultValue={user.email}
        />
        {errors.email && <p className={styles.errors}>{errors.email}</p>}
        </section>
        
        <section className={styles.section}>
          <label className={styles.label} htmlFor="password">Password: </label>
          <input
            className={styles.input}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Ingrese su password"
            defaultValue={user.password}
            onChange={handleOnChange}
            />
        <button className={styles.buttonPassword} type="button" onClick={handleShowPassword}>
            {showPassword 
            ? <img className={styles.eyeButtonImg} src="https://www.pngitem.com/pimgs/m/76-760338_close-eye-svg-closed-eye-icon-hd-png.png" /> 
            : <img className={styles.eyeButtonImg} src="https://www.clipartmax.com/png/middle/291-2914907_eye-icon-vector-image-auge-symbol.png" />}
        </button>
        {errors.password && <p className={styles.errors}>{errors.password}</p>}
          </section>
        <section className={styles.section}>
          <button
          className={styles.button}
            type="submit"
            // onClick={handleOnSubmit}
            disabled={
            !Object.values(errors).every((value) => value === "") ||
            !userData.email ||
            !userData.password
            }>
            Entrar
        </button>
          <h4 className={styles.title}>¿No tienes cuenta? Genera una rápidamente <Link to="/new">Aquí</Link></h4> 
        </section>
        
    </form>
    </div>
    )
}