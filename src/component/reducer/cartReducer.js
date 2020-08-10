import { ADD_TO_CART } from "../action/actiontypes"
const initState = {
    items: []}
const cart = (state = initState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            console.log(action)
            return{...state,
                       items:action.payload.cartItems
            }
            default:
                return state;
        }}
export default cart
        