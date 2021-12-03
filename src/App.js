import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products';
import About from './Components/About/About'
import Product from './Components/Product/Product'
import Error from './Components/Error/Error'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={Product} />
        <Route path="/*" component={Error} />
      </Switch>
      {/* <Home />
      <Products />
      <About /> */}
    </div>

  );
}

export default App;
