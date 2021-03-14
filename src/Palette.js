import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import 'rc-slider/assets/index.css';
import './Palette.css';
import { useParams } from 'react-router';

const Palette = (props) => {
  console.log(props);
  const [level, setLevel] = useState(400);
  const [format, setFormat] = useState('hex');
  const colorBoxes = props.palette.colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} key={color.id} />
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
      <footer className="Palette-footer">
        {props.palette.paletteName}
        <span className="emoji"> {props.palette.emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
