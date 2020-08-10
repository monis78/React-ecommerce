import React,{Component} from 'react';
import {connect} from 'react-redux'
import {fetchProducts} from './action/productAction'; 
// import '../stylesheet/style3.css'


class ProductDetail extends Component {

	 
	 componentWillMount(){
		this.props.fetchProducts()
	}
	render() {
		const ids =this.props.match.params.id
		console.log(this.props.products)
		const productItems = this.props.products.filter(id=>id.articleCode==ids).map(product => { return(
			
      


		
				<div className="wrapper row">
					<div className="preview col-md-4">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active " id={product.articleCode}><img src={`http://${product.image[0].src}`} />
						  </div>  
						</div>
						
					</div>
					
					<div className="details col-md-5 ">

						<h3 clasName="product-title">{product.title}</h3>
						<h4 className="price">current price: <span>{product.price}</span></h4>
						<h5 className="text-info">{product.sellingAttribute}</h5>
						<p>hurry only <span className="text-danger">{product.swatchesTotal} </span> left</p>
						<div className="action">
							<button className="add-to-cart btn btn-primary btn-sm" type="button">add to cart</button>
							
						</div>
					</div>
				</div>
			

		)})
		return (
            <div className="carddetail mt-0">
                {productItems}
            </div>
		)}
}

const mapStateToProps = (state,ownProps) =>{
	const id =ownProps.match.params.id
	console.log(id)

	return {
	products:state.products.items
}}

export default connect(mapStateToProps,{fetchProducts})(ProductDetail);