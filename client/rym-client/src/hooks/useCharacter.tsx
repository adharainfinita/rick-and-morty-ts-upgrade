import { useParams} from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
// import axios from "axios";
import { URL_BASE } from "../utils/api";
import { addDetail, cleanDetail } from "../features/charDetailSlice";

const useCharacterDetail = ()=>{

const {id} = useParams();
const dispatch = useDispatch();
const character = useSelector((state: RootState) => state.characterDetail.value);

    useEffect(() => {
     
        try {
           fetch(`${URL_BASE}/${id}`)
            .then(response => response.json())
            .then(data => dispatch(addDetail(data)))
            }
            catch (error) {
            console.log(error);
        }
       

    return ()=>{
        dispatch(cleanDetail(
            {
                id: 0,
                name: "string",
                status: "",
                species:"",
                gender: "",
                origin: {
                    name: ""
                },
                image: ""
            }
        ))
    }
    }, [dispatch, id]);
    return character
};


export default useCharacterDetail;