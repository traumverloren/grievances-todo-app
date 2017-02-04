import React from 'react';
import '../Footer.css';
import FilterContainer from './FilterContainer';

const Footer = () => {
  return (
    <div>
      <div className='filters'>
        <FilterContainer filter='ALL'>ALL</FilterContainer>
        <FilterContainer filter='UNAIRED'>UNAIRED</FilterContainer>
        <FilterContainer filter='AIRED'>AIRED</FilterContainer>
      </div>
    </div>
  )
}

export default Footer
