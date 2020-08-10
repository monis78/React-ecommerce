import React, { Component } from 'react'
import { connect } from 'react-redux'
import {sortProducts} from './action/productAction'; 

 class Filter extends Component {
     
    render() {
        
        return (
            <div className="row">
            <div className="col-md-4">
                {this.props.products.length} product found
            </div>
            <div className="col-md-4">
                <label>
                    order by
                    <select className="form-control" value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.products,e.target.value)}>
                    <option value="">Select</option>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to Lowest</option>
                    </select>
                </label>
            </div>
            <div className="col-md-4">

            </div>
            </div>
        )
    }
}
const mapStateToProps=state =>({
    products:state.products.items,

    sort: state.products.sort
})

export default connect(mapStateToProps,{sortProducts})(Filter)
