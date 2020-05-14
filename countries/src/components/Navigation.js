import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  return (
    <div className='nav-container'>
      <div className='nav-text'>Where in the world?</div>
      <div className='btn-container'>
        <button>Dark Mode<FontAwesomeIcon icon='moon' /></button>
      </div>
    </div>
  );
};

export default Navigation;
