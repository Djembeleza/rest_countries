import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../context/ThemeContext';
import { colors } from '../theme';

const Navigation = () => {
  const [darkMode, setDarkMode] = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className='nav-container' style={darkMode ? { backgroundColor: colors.otherDark, color: colors.otherLight } : { backgroundColor: colors.otherLight, color: colors.otherDark }}>
      <div className='nav-text'>Where in the world?</div>
      <div className='btn-container'>
        <button onClick={handleClick}>Dark Mode{darkMode ? <FontAwesomeIcon icon='moon' /> : <FontAwesomeIcon icon='sun' />}</button>
      </div>
    </div>
  );
};

export default Navigation;
