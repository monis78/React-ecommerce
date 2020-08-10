import { FETCH_PRODUCTS,ORDER_PRODUCTS_BY_PRICE ,ADD_TO_CART } from "../action/actiontypes"
const initState = {
    items: [],
    cartItems :[]
}
const productReducer = (state = initState,action)=>{
    switch(action.type){
        
        case ORDER_PRODUCTS_BY_PRICE:
            console.log(state)
            console.log(action)
            return { ...state}


        case FETCH_PRODUCTS:
            console.log("fetchproduct data" +action)
            return {...state, items : action.payload, cartItems:action.payload}
            
            case ADD_TO_CART:
                console.log(state)
                return{...state,
                           cartItems:action.payload.cartItems
                }
        
   
            default:
            return state;
}
}
export default productReducer;