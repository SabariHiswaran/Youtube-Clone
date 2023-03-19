import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import menuSlice from "./menuSlice";
import { searchReducer } from "./searchSlice";
import searchSuggestionSlice from "./searchSuggestionSlice";

const store = configureStore({

    reducer :{
        menuslice : menuSlice,
        searchReducer :searchReducer,
        livechat : chatSlice,
        searchSuggestionSlice : searchSuggestionSlice

    }

})

export default store