import React, { Component } from 'react'
import '../stylesheet/style2.css'
import {connect} from 'react-redux'
import {fetchProducts} from './action/productAction'; 
import {addToCart} from './action/cartaction';
import { Link } from 'react-router-dom';

 class Products extends Component {
	 componentWillMount(){
		 this.props.fetchProducts()
	 }
    render() {
		
        const productItems = this.props.products.map(product => { return(
            
<div className="col-md-3" key={product.articleCode}>
	<figure className="card card-product">
		<Link to={'/'+product.articleCode}>
			<img src={`http://${product.image[0].src}`} />
		</Link>	
		
		<figcaption className="info-wrap">
			<h6 className="title text-dots"><a href="#">{product.category}  </a></h6>
			<div className="action-wrap">
				<a href="#" className="btn btn-primary btn-sm float-right" onClick={()=>this.props.addToCart(this.props.cartItems,product)}> Add to cart </a>
				<div className="price-wrap h5">
					<span className="price-new">{product.price}</span>
					<del className="price-old"></del> 
				</div> 
			</div> 
		</figcaption>
	</figure> 
</div>)
            }
        )
        
    return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

const mapStateToProps = state =>({
	products:state.products.items,
	cartItems:state.products.cartItems
})

export default connect(mapStateToProps,{fetchProducts,addToCart})(Products)