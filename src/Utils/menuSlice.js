
import { createSlice } from "@reduxjs/toolkit"

const menuslice = createSlice({
    name: "menuslice",  
    initialState: {
        menustate: true ,
        watchPageMenuState : true
    },
    reducers: {
        menuReducer: (state) => {
            return {
                ...state,
                menustate : !state.menustate
            }
           
        },
        closeMenu: (state) => {
            return {
                ...state,
                watchPageMenuState : false
            }
        }
    } 


})

export const { menuReducer,closeMenu } = menuslice.actions

export default menuslice.reducer