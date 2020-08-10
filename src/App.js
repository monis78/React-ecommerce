import React from 'react';
import Navbar from './component/Navbar'
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Home from './component/home'
import Basket from './component/basket'
import ProductDetail from './component/productdetail'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />  
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/cart' component={Basket} />
    <Route path='/:id' component={ProductDetail} />
    </Switch>

     </div>
    </BrowserRouter>
  );
}

export default App;
