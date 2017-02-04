import React from 'react';
import '../Filter.css';

const Filter = ({children, onFilterClick, isActive}) => {
  if (isActive) {
      return <div className='filter' style={{color: 'red'}}>{children}</div>
  }

  return (
    <div>
        <div onClick={(e) => {e.preventDefault()
                              onFilterClick() }}
             className='filter' style={{color: 'black'}}>{children}</div>
    </div>
  )
}

export default Filter
