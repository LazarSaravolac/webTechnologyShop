import React, { Component } from 'react';
import {Switch,Route, withRouter} from 'react-router-dom';
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
import PhoneListPagination from '../src/components/PhoneListPagination';
import ContactData from '../src/components/ContactData/ContactData';
import Auth from '../src/components/Auth/Auth';
import TVListPagination from '../src/components/TVListPagination';

import { connect } from 'react-redux';
class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/contact" exact component={Contact} />
      <Route component={Default} />
    </Switch>
    );


    if (this.props.isAuthenticated) {
      routes = (
        <React.Fragment>
        <Switch>
        <Route path="/" exact component={Category} />
        <Route path="/auth" component={Auth} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="/phone" exact component={PhoneList} /> */}
        <Route path="/tv" exact component={TVListPagination} />
        <Route path="/tablets" exact component={TabletList} />
        <Route path="/drones" exact component={DroneList} />
        <Route path="/details-tv" exact component={DetailsTV} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/phone" exact component={PhoneListPagination} />
        <Route path="/contactData" exact component={ContactData} />
        <Route component={Default} />
      </Switch>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
          <Navbar/>
        {routes}
      </React.Fragment>
  );
}
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};


export default withRouter(connect(mapStateToProps)(App));