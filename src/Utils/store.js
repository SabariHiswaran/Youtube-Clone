import { configureStore } from "@reduxjs/toolkit";
import { livechat } from "./chatSlice";
import menuSlice from "./menuSlice";
import { searchReducer } from "./searchSlice";

const store = configureStore({

    reducer :{
        menuslice : menuSlice,
        searchReducer :searchReducer,
        livechat : livechat
    }

})

export default store