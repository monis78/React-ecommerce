import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from './products'
import Filter from './filter'

 class Home extends Component{
 

        
    
    render(){
            return(
                <div className="container-fluid">
                
                <div className="container-fluid mt-3" >
                <hr />  
                <Filter  />
                <hr />
                        <div className="col-md-12">
                         <Products />
                        </div>


                 </div>
                 </div>
            )
        }
    }


export default Home
