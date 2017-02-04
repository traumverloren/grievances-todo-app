import React from 'react';
import '../Footer.css';
import FilterContainer from './FilterContainer';

const Footer = () => {
  return (
    <div>
      <div className='filters'>
        <FilterContainer filter='ACTIVE'>active</FilterContainer>
        <FilterContainer filter='AIRED'>aired</FilterContainer>
      </div>
    </div>
  )
}

export default Footer
