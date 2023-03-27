
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
                    menustate : !state.menustate,
                    watchPageMenuState : true
            }
           
        },
        closeMenu: (state) => {
            return {
                menustate : false,
                watchPageMenuState : true
            }
        }
    } 


})

export const { menuReducer,closeMenu } = menuslice.actions

export default menuslice.reducer