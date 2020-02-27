import React, { Component } from 'react';
import Type from './Type';

export default class Category extends Component {
    state = {
        types : [
            {       id:1,    
                    name: "TV",
                img: "img/tv/tv.png",
                    link:"/tv"
            },
            {
                id:2,    
                name: "Phone",
                img:"img/product-1.png",
                link:"/phone"
            },
            {   id:3,    
                name: "Tablet",
                img:"img/tablet.png",
                link:"/tablets"
            },
            {   id:4,    
                name: "Drone",
                img:"img/drone.png",
                    link:"/drones"
        }
        ]
        
    }
    render() {
       
        return (
            <div className="py-5">    
            <div className="container">
            <div className="row">
                        {this.state.types.map(type => {
                            return <Type type={type} key={type.id}/>
                })}
            </div>
         </div>
        </div>
       )
  };
}