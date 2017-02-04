import React from 'react';
import '../Filter.css';

const Filter = ({children, onFilterClick}) => {
  return (
    <div>
        <div onClick={onFilterClick} className='filter' style={{color: 'red'}}>{children}</div>
    </div>
  )
}

export default Filter
