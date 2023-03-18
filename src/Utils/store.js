import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import menuSlice from "./menuSlice";
import { searchReducer } from "./searchSlice";

const store = configureStore({

    reducer :{
        menuslice : menuSlice,
        searchReducer :searchReducer,
        livechat : chatSlice
    }

})

export default store