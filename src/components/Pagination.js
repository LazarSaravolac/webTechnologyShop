import React from 'react';
import styled from 'styled-components';

import {ButtonContainer} from './Button';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="col-5 col-md-2 col-lg-1 ml-auto">
      <PaginationContainer className='pagination ml-auto'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item  mr-1'>
            <p onClick={() => paginate(number)}  className='page-link'>
              {number}
            </p>
          </li>
        ))}
      </PaginationContainer>
    </nav>
  );
};

export default Pagination;


const PaginationContainer = styled.ul`
   
`;

