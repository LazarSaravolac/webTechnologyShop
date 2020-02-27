import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import PhoneList from './components/PhoneList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from '../src/components/Modal';
import Category from '../src/components/Category';
import TVList from './components/TVList';
import DetailsTV from './components/DetailsTV';
import ModalTV from '../src/components/ModalTV';
import Contact from '../src/components/Contact';
import TabletList from '../src/components/TabletList';
import DroneList from '../src/components/DroneList';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Category} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/phone" exact component={PhoneList} />
          <Route path="/tv" exact component={TVList} />
          <Route path="/tablets" exact component={TabletList} />
          <Route path="/drones" exact component={DroneList} />
          <Route path="/details-tv" exact component={DetailsTV} />
          <Route path="/contact" exact component={Contact} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <ModalTV/>
      </React.Fragment>
  );
}
}

