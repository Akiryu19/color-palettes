import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import 'rc-slider/assets/index.css';
import './Palette.css';
import PaletteFooter from './PaletteFooter';

const Palette = (props) => {
  const [level, setLevel] = useState(400);
  const [format, setFormat] = useState('hex');
  const colorBoxes = props.palette.colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      id={color.id}
      paletteId={props.palette.id}
      showFullPalette={true}
    />
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
        showSlider={true}
      />

      <div className="Palette-colors">{colorBoxes}</div>

      <PaletteFooter {...props.palette} />
    </div>
  );
};

export default Palette;
