import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

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
        <div>
            <h2><Link to="/favorites">Favorites</Link></h2>
            <h2><Link to="/home">Home</Link></h2>
            <h2><Link to="/about">About</Link></h2>
            <button className="btn" type="button" onClick={logOut}>Log out</button> 
            
            <SearchBar/>
        </div>
    )
}