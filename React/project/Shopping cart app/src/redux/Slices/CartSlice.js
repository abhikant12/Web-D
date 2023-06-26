import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({                          //store all the action in Cartslice 
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;                 //exporting CartSlice action like add , remove;
export default CartSlice.reducer;