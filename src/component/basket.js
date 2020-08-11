import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeFromCart } from './action/cartaction'

class Basket extends Component {
    render() {
        const { cartItems } = this.props;
        console.log(this.props)

        const cartProducts = this.props.cartItems.map(product => {
            return (



                
                    <tr key={product.articleCode}>
                        <td><img src={`http://${product.image[0].src}`} width="50" height="50" /> </td>
                        <td>{product.title}</td>
                        <td>In stock</td>
                        <td className="text-center">{product.count}</td>
                        <td className="text-right">{product.price}</td>
                        <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                    </tr>
               



            )
        })



        return (
            <div className="shopping-cart">
                {/* {cartItems.length=== 0? "Basket is empty":<div>you have {cartItems.length} in your cart.</div>} */}
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Available</th>
                                        <th scope="col" className="text-center">Quantity</th>
                                        <th scope="col" className="text-right">Price</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {cartProducts}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    cartItems: state.products.cartItems
})

export default connect(mapStateToProps, { removeFromCart })(Basket)
