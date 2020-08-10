import { FETCH_PRODUCTS,ORDER_PRODUCTS_BY_PRICE } from "./actiontypes";


export const fetchProducts = () =>(dispatch)=>{
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.npoint.io/2a4561b816e5b6d00894"; 
    fetch("https://api.npoint.io/2a4561b816e5b6d00894", {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        }).then(res=>res.json())
        .then(data =>{
            return dispatch({type:FETCH_PRODUCTS, payload: data})
            
            })
        }

        export const sortProducts = (products,sort) =>(dispatch)=>{  
    console.log(products)
        if(sort !==''){ 
            products.sort((a,b)=>( sort==='lowest')?
            (Number(a.price.split(".")[1].replace(",","")) > Number(b.price.split(".")[1].replace(",",""))? 1:-1)
            :(Number(a.price.split(".")[1].replace(",","")) < Number(b.price.split(".")[1].replace(",",""))? 1:-1))
        } else{
            products.sort((a,b)=>(a.articleCode < b.articleCode? 1:-1));
        }
        console.log(products)
        return dispatch({type: ORDER_PRODUCTS_BY_PRICE,
            payload:{
            sort:sort,
            items: products
        }});
    }
    