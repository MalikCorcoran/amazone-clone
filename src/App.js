import React, {useEffect} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Auth/Login';
import { auth } from './DBConfig/Firebase';
import { useStateValue } from './Provider/StateProvider';
import Payment from './Component/Checkout/Payment';



//https://e-clone-9c4f5.web.app
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("He is", authUser);

      if (authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
        
      }
    })
  }, [])



  return (
  <Router >
    <div className="app">

  {/* Header */}
  <Switch >

        {/* Home */}
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        <Route path="/checkout">
            <Header />
          <Checkout />
        </Route>

          <Route path="/login">
           <Login />
          </Route>
          <Route path="/payment">
          <Header />
          <Payment />
          </Route>


  </Switch>

    </div>
  </Router>
  );
}

export default App;
