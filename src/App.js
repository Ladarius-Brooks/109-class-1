import React from 'react';
import './App.css';
import NavBar from "./components/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Catalog from './components/catalog';
import Home from './components/home';
import Todo from "./components/todo";
import Cart from "./components/cart";
import {BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      
      <div className="App container-fluid">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/catalog" component={Catalog}></Route>
          <Route path="/todo" component={Todo}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </div>

      <Footer></Footer>
    </BrowserRouter>
  );
}

// watch a video on react redux store 

export default App;
