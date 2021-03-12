import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const colorBoxes = props.Palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  const changeLevel = (level) => {
    setLevel(level);
  };
  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={changeLevel}
      />

      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default Palette;
