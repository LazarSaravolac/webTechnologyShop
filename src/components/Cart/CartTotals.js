import React from 'react';
import {Link} from 'react-router-dom';
export default function CartTotals({value}) {

   
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;


    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                onClick={()=>clearCart()} type="button">
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal : 
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax : 
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total : 
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <Link to="/contactData">
                            <button className="btn btn-outline-success text-uppercase mb-3 px-5"
                                onClick={()=>console.log()} type="button">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}