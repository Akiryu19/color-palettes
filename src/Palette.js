import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import 'rc-slider/assets/index.css';
import './Palette.css';

const Palette = (props) => {
  const [level, setLevel] = useState(400);
  const [format, setFormat] = useState('hex');
  const colorBoxes = props.Palette.colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} />
  ));
  const changeLevel = (level) => {
    setLevel(level);
  };
  const changeFormat = (e) => {
    setFormat(e.target.value);
  };
  return (
    <div className="Palette">
      <Navbar
        level={level}
        format={format}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
      />

      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default Palette;
