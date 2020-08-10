import {combineReducers} from 'redux'
import productReducer from './productReducer'
import cart from './cartReducer'

const rootReducer =  combineReducers({
    products:productReducer,
    // cart:cart
})
export default rootReducer
 