
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Nav.module.css"

export const Nav = () =>{
    const dispatch = useDispatch();
   const navigate = useNavigate();

    const logOut = () =>{
        dispatch(logOutUser({
            id: 0,
            email: "",
            password: "",
            access: false
        }))
        navigate("/")
    }

    return (
        <div className={styles.Nav}>
            <h2><Link to="/favorites" className="link">Favorites</Link></h2>
            <h2><Link to="/home" className="link">Home</Link></h2>
            <h2><Link to="/about" className="link">About</Link></h2>
            <button type="button" onClick={logOut}>Log out</button> 
        </div>
    )
}