import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

import { connect } from 'react-redux';
 class Navbar extends Component {
    render() {

        let cart = null;

        if(this.props.isAuthenticated){
            cart = (
                <React.Fragment>
                <ul className="navbar-nav align-items-center  ml-auto">
                   
                    <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                   
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                        </span>
                    my cart
                    </ButtonContainer>
                </Link>
                </React.Fragment>
                );
        }

        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                <Link to="/contact">
                    <img src={logo} alt="contact" className="navbar-brand"/>
                </Link>
                
                    {cart}
           </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};


export default connect (mapStateToProps)(Navbar);