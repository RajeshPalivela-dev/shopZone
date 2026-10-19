import { createSlice } from "@reduxjs/toolkit";


 const initialState={
      cartItems:[],
      totalAmount:0,
      searchInput:"",
 }
const cartSlice=createSlice({

    name:"cart",

    initialState,


    reducers:{
         addItem(state,action){
           console.log(state,action,"state and action in reducers add")
           state.cartItems.push(action.payload)
           state.totalAmount+=action.payload.price
         },
         removeItem(state,action){
             console.log(state,action,"state and actions in remove item")
             state.cartItems=state.cartItems.filter((item)=>item.id !==action.payload.id)
             state.totalAmount-=action.payload.price
         },
         removeAll(state,action){
             console.log(state,action,"state and action in remoall")
             state.cartItems=[]
             state.totalAmount=0
         },
         searchItem(state,action){
             console.log(state,action,"search in state nd actions")
             state.searchInput=action.payload
         
         }
         
         }
    }
)
console.log(cartSlice,"cartSlice")
export const {addItem,removeItem,removeAll,searchItem}=cartSlice.actions
export default cartSlice.reducer