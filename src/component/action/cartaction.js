import { ADD_TO_CART ,REMOVE_FROM_CART} from "./actiontypes";

export const addToCart =(items, product)=>(dispatch)=>{
    console.log(items, product)
let cartItems= []     

            let productAlreadyInCart = false;
            console.log(items, product,productAlreadyInCart,+"1")
            items.forEach(item=> {
                if(item.articlecode===product.articlecode){
                    productAlreadyInCart = true;
                    item.count++;
                    console.log("failed")
                }
            });
            if(!productAlreadyInCart){
                cartItems.push({...product,count:1})
                console.log("executed")
            }
            console.log(items, product,productAlreadyInCart,+"2")
            
            localStorage.setItem("cartItems",JSON.stringify(cartItems));
            
            return dispatch({type:ADD_TO_CART, payload:{
                cartItems:cartItems
            
            }
        });
}


export const removeFromCart =(items, product)=>(dispatch)=>{
   const cartItems= items.splice().filter(e=> e.id !== product.articlecode);

   localStorage.serItem("cartItems",JSON.stringify(cartItems));
   return dispatch({type:REMOVE_FROM_CART, payload:{
       cartItems:cartItems }})
}