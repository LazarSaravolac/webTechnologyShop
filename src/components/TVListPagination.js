import React, { Component } from 'react'
import TV from './TV.js';
import Title from './Title';
import { ProductConsumer } from '../context';
import Pagination from './Pagination';
export default class LCDTV extends Component {

    state = {
        currentPage:1
    }


    render (){
    return(
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                        <Title name="our" title="TV"/>
                    <div className="row">
                         <ProductConsumer>
                            {(value) => {
                                let TVPerPage = 4;
                                
                                let tv = value.tv;
                                const indexOfLastTV = this.state.currentPage * TVPerPage;
                                const indexOfFirstTV = indexOfLastTV - TVPerPage;
                                const currentPage = tv.slice(indexOfFirstTV, indexOfLastTV);
                                const totalPageNumber = tv.length / TVPerPage;

                                const paginate = pgNumber => {
                                    this.setState({
                                        currentPage:pgNumber
                                    })
                                }

                                let pagination = null;
                                if (totalPageNumber > 1) {
                                    pagination =  <Pagination postsPerPage={TVPerPage} totalPosts={value.tv.length} paginate={paginate}/>
                                }


                                return( 
                                    <React.Fragment>
                                    {currentPage.map(product => {
                                    return <TV key={product.id} tv={product}/>
                                    
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
