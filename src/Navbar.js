import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

const Navbar = (props) => {
  //   const [format, setFormat] = useState('hex');

  //   const handleChange = (e) => {
  //     setFormat(e.target.value);
  //     props.changeFormat(e.target.value);
  //   };
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">React Color Picker</a>
      </div>
      <div className="slider-container">
        <span>Level:{props.level}</span>
        <div className="slider">
          <Slider
            defaultValue={props.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={props.changeLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={props.format} onChange={props.changeFormat}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Navbar;
