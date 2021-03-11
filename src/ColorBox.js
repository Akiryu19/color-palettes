import React from 'react';
import './ColorBox.css';

const ColorBox = (props) => {
  return (
    <div className="ColorBox" style={{ background: props.background.color }}>
      <div>{props.background.name}</div>
      <span>More</span>
    </div>
  );
};

export default ColorBox;
