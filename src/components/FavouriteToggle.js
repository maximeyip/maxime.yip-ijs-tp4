import React, { useState } from 'react';

const FavouriteToggle = ({ isActive = false, style = {} }) => {
  const [value, setValue] = useState(isActive);

  return (
    <span style={style}
    onClick={() => {setValue(!value)}}>{value ? '♥️' : '♡'}</span>
  )
};

export default FavouriteToggle;
