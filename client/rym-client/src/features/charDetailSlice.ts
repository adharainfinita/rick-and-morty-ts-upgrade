import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Character } from "./charactersSlice";


export interface CharacterDetailState{
    value: Character
}

const initialState: CharacterDetailState={
    value: {
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
}

export const characterDetailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        addDetail: (state, action: PayloadAction<Character> ) =>{
            state.value = action.payload
        },
        cleanDetail: (state, action: PayloadAction<Character> ) =>{
            state.value = action.payload
        }
    }
})

export const {addDetail, cleanDetail} = characterDetailSlice.actions;
export default characterDetailSlice.reducer;