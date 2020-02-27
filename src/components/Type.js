import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default class Type extends Component {
    render() {
        const { name, img, link } = this.props.type;
  return(
       <TypeWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">
              <div  className="img-container p-5">
              
                 <img src={img} alt="product" className="card-img-top" />
                  
                  
                  <Link to={link}>
                      <span>
                          {name}
                      </span>
                  </Link>
            </div>
              </div>
     </TypeWrapper>
       )
  };
}

const TypeWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.img-container{
    position:relative;
    overflow:hidden;
    height:240px;
    display:flex;
    align-items:center;
    transition:all 1s linear;

}
.img-container:hover {
   
}
span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
    color:white;
    font-size:2rem;
    background-color:rgba(31, 30, 30,0.6);
    padding:15px;
}
.img-container:hover span {
    transform: translate(-50%, -50%) scale(1);
  }
`