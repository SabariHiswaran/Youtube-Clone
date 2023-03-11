import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name : "search" ,
    initialState : {},
    reducers : {
        searchReducer : (state,action) => {
              Object.assign(state,action.payload)
        } 
    }
})


export const {searchReducer} = searchSlice.actions

export default searchSlice.reducer