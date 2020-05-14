import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Choose from './components/Choose/Choose';
import FoodArea from './components/FoodArea/FoodArea';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import Shipment from './components/Shipment/Shipment';




function App() {
  const [cart, setCart] = useState(0);
 
  return (
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Header cart={cart}></Header>
            <Banner></Banner>
            <FoodArea></FoodArea>
            <Choose></Choose> 
            <Footer></Footer> 
          </Route>
          <Route path="/food/:foodKey">
              <Header cart={cart}></Header>
              <FoodDetails cart={cart} setCart={setCart}></FoodDetails>
              <Footer></Footer> 
          </Route>
          <Route path="/checkout">
            <Header cart={cart}></Header>
            <Checkout></Checkout>
            <Footer></Footer> 
          </Route>
          <Route path="/login">
            <SignUp></SignUp>
          </Route>
          <Route path="/shipment">
            <Header cart={cart}></Header>
            <Shipment></Shipment>
            <Footer></Footer> 
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router> 
       
     
  );
}

export default App;
