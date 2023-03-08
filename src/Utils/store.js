import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

const store = configureStore({

    reducer :{
        menuslice : menuSlice
    }

})

export default store