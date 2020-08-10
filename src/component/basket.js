import React, { Component } from 'react'
import { connect } from 'react-redux';
import {removeFromCart} from './action/cartaction'

 class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        console.log(this.props)
        return (
            <div className="shopping-cart">
            {cartItems.length=== 0? "Basket is empty":<div>you have {cartItems.length} in your cart.</div>}
           
            
            </div>
        )
    }
}
const mapStateToProps = state =>({
cartItems:state.products.cartItems
})

export default connect(mapStateToProps,{removeFromCart})(Basket)
