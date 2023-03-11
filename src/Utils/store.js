import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import { searchReducer } from "./searchSlice";

const store = configureStore({

    reducer :{
        menuslice : menuSlice,
        searchReducer :searchReducer
    }

})

export default store