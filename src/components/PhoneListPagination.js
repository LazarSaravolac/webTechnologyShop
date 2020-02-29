import React, { Component} from 'react'
import Phone from './Phone.js';
import Title from './Title';
import {ProductConsumer} from '../context';
import Pagination from './Pagination';
export default class PhoneListPagination extends Component {
  
    state = {
        currentPage:1
    }
  
    render() {
    
    return(
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="phone" />
                    <ProductConsumer>
                        {(value) => {
                            return (
                                
                            <div className="form-group col-5 col-md-3 ">
                                <label htmlFor="price">
                                    Price ${value.price}
                                </label>
                                    <input type="range" name="price" min={0} max={value.maxPrice} id="price" value={value.price}
                                        onChange={(event) => { value.handleChange(event);this.setState({currentPage:1}) }} className="form-control" />
                                        </div>
                                        
                                    )
                        }}
                        </ProductConsumer>
                    <div className="row">
                         <ProductConsumer>
                            {(value) => {
                                let phonesPerPage = 4;
                                
                                let phones = value.sortedPhones;
                                const indexOfLastPost = this.state.currentPage * phonesPerPage;
                                const indexOfFirstPost = indexOfLastPost - phonesPerPage;
                                const currentPosts = phones.slice(indexOfFirstPost, indexOfLastPost);
                                const totalPageNumber = phones.length / phonesPerPage;
                                const paginate = pgNumber => {
                                    this.setState({
                                        currentPage:pgNumber
                                    })
                                }

                                let pagination = null;
                                if (totalPageNumber > 1) {
                                    pagination =  <Pagination postsPerPage={phonesPerPage} totalPosts={value.phones.length} paginate={paginate}/>
                                }

                                return( 
                                    <React.Fragment>
                                    {currentPosts.map(product => {
                                    return <Phone key={product.id} phones={product}/>
                                    
                                    })}
                                      {pagination}
                                </React.Fragment>
                                )
                                
                            }}
                        </ProductConsumer> 
                    </div>
            </div>
            </div>   
        </React.Fragment>
    
)
}
}
