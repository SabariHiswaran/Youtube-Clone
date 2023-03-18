import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name : "chat",
    initialState : {
        chatMessages : []
    },
    reducers : {
        livechat : ( state , action ) => {
                if(state.chatMessages.length >200){
                    state.chatMessages.pop()
                }
                else {
                state.chatMessages.unshift(action.payload)
                }
        }
    }
})


export const {livechat} = chatSlice.actions

export default chatSlice.reducer