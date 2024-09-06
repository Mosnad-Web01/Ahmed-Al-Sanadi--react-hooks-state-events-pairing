// Button.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ label, count, onClick, icon }) {
  return (
    <button onClick={onClick} style={{ }}>
      {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: '5px' }} />}
      {count !== undefined ? `${count} ${label}` : label}
    </button>
  );
}

export default Button;