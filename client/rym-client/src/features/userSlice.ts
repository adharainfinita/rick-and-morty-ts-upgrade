import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface  User{
    id: number;
    email: string;
    password: string;
   access: boolean

}
export interface UserState{
    value: User;
}

const initialState: UserState = {
    value: {
        id: 0,
        email: "",
        password: "",
        access: false
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) =>{
            state.value = action.payload;
        },
        authorizeUser: (state, action: PayloadAction<boolean>) => {
            state.value.access = action.payload 
        },
        logOutUser: (state, action: PayloadAction<User>) => {
            state.value = action.payload 
        }
    }})

export const {addUser, authorizeUser, logOutUser} = userSlice.actions;
export default userSlice.reducer;