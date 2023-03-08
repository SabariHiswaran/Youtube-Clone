
import {createSlice} from "@reduxjs/toolkit"

const menuslice = createSlice({
    name : "menuslice",   //whatever the name you want based on the slice
    initialState : {
        menustate : true
    },
    reducers : { 
        menuReducer : (state) => {
        state.menustate = !state.menustate
     } 
    }
})

export const {menuReducer}= menuslice.actions

export default menuslice.reducer