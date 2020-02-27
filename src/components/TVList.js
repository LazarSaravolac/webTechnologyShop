import React, { Component } from 'react'
import TV from './TV.js';
import Title from './Title';
import {ProductConsumer} from '../context';
export default class LCDTV extends Component {
    render (){
    return(
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                        <Title name="our" title="TV"/>
                    <div className="row">
                         <ProductConsumer>
                            {(value) => {
                                return value.tv.map(product => {
                                    return <TV key={product.id} tv={product}/>
                                    
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
