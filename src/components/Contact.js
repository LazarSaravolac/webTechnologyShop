import React, {Component} from 'react';
export default class Contact extends Component {
     render() {
  return(
       <div className="container">
            <div className="row">
              <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h5>Author of this website</h5>
                      <h1 className="display-3">
                         Lazar Saravolac
                      </h1>
                      <h6>If you liked it - checkout my  <a href="https://github.com/LazarSaravolac" target="_blank" rel="noopener noreferrer">gitHub</a> account</h6>
                 </div>
            </div>
     </div>
       )
  };
}