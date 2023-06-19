import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface  Character{
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin:{
        name: string
    },
    image: string
}
export interface CharactersState{
    value: Character[]
}

const initialState: CharactersState = {
    value: []
}

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        addCharacter: (state, action: PayloadAction<Character>) =>{
            state.value = [...state.value, action.payload];
        },
        removeCharacter: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.value = state.value.filter(char => char.id !== id);
    }
    }
})

export const {addCharacter, removeCharacter} = charactersSlice.actions;
export default charactersSlice.reducer;