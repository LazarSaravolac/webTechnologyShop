import React, {Component} from 'react';

import { Link } from 'react-router-dom';
export default class TabletList extends Component {
     render() {
  return(
       <div className="container">
            <div className="row">
                 <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                      <h1 className="display-3">
                         Currently we are fixing some bugs
                      </h1>
                      
                      <h3>Checkout our other products in <Link to="/">shop</Link></h3>
                 </div>
            </div>
     </div>
       )
  };
}