import { createSlice } from "@reduxjs/toolkit";


const searchSuggestionSlice = createSlice({
    name : "SearchSuggestion" , 
    initialState : {
        suggestion : null
    },
    reducers : {
        removeSuggestion : (state) => {
             state.suggestion = true
        },
        addSuggestion : (state) => {
            state.suggestion = false
        }
    }
})

export const {removeSuggestion,addSuggestion} = searchSuggestionSlice.actions

export default searchSuggestionSlice.reducer