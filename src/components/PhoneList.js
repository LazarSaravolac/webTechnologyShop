import React, { Component} from 'react'
import Phone from './Phone.js';
import Title from './Title';
import {ProductConsumer} from '../context';
export default class PhoneList extends Component {
  
  
    render() {
    
    return(
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                        <Title name="our" title="phone"/>
                    <div className="row">
                         <ProductConsumer>
                            {(value) => {
                               
                                return value.phones.map(product => {
                                    return <Phone key={product.id} phones={product}/>
                                    
                                })
                                
                            }}
                        </ProductConsumer> 
                    </div>
            </div>
            </div>   
        </React.Fragment>
    
)
}
}
