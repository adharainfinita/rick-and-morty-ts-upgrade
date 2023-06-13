import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface  Favorite{
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin:string,
    image: string
}
export interface FavoriteState{
    value: Favorite[]
    copy: Favorite[]
}

const initialState: FavoriteState = {
    value: [],
    copy: []
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<Favorite>) =>{
            console.log(action.payload);
            
            state.value = [...state.value, action.payload];
            state.copy = [...state.value, action.payload]
        },
        getAllFav: (state, action: PayloadAction<Favorite[]>) =>{
            state.value = action.payload
            state.copy = action.payload
        },
        removeFav: (state, action: PayloadAction<Favorite[]>) => {
            
            state.value = action.payload;
    },
        orderFav: (state, action: PayloadAction<string>) =>{
            state.value = action.payload === "A"  
                ?state.value.sort((a,b)=> a.id - b.id)
                :state.value.sort((a,b)=> b.id - a.id) 
        },
        filterFav: (state, action: PayloadAction<string>) =>{
            let favoritesFound: Favorite[] = [];
            action.payload === "All" ? favoritesFound = [...state.copy]
            : favoritesFound = state.copy.filter(char => char.gender === action.payload);
            state.value = favoritesFound
        }
    }
})

export const {addFav, getAllFav, removeFav, orderFav, filterFav} = favoritesSlice.actions;
export default favoritesSlice.reducer;