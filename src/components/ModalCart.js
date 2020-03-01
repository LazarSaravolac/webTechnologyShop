import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import {ButtonContainer} from './Button';
import { Link } from 'react-router-dom';


export default class ModalCart extends Component {
  render (){
  return(
      <ProductConsumer>
          {(value) => {

              let modalOpen = this.props.modal;
              if (!modalOpen) {
                  return null;
              } else {
                  return (<ModalContainer>
                      <div className="container">
                          <div className="row">
                              <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center  p-5">
                                  <h5>You successfully ordered items &nbsp;&nbsp;  <i className="fa fa-check text-success "/></h5>
                                 
                              </div>
                          </div>
                      </div>
                  </ModalContainer>);
              }

              
          }}
        </ProductConsumer>
       )
  };
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:var(--mainWhite);
    }
`;