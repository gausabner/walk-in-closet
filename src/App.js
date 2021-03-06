import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cartt from './components/Cart/Cartt';
import Default from './components/Default';
import Modal from './components/Modal';

// eslint-disable-line no-use-before-define

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cartt} />
          <Route component={Default} />
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
