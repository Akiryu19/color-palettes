import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

const Palette = (props) => {
  const [level, setLevel] = useState(400);
  const colorBoxes = props.Palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  const changeLevel = (level) => {
    setLevel(level);
  };
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />

      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default Palette;
