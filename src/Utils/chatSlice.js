import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name : "chat",
    initialState : {
        chatMessages : []
    },
    reducers : {
        livechat : ( state , action ) => {
                state.chatMessages.push(action.payload)
        }
    }
})


export const {livechat} = chatSlice.actions

export default chatSlice.reducer