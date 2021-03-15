import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const SingleColorPalette = (props) => {
  const [format, setFormat] = useState('hex');
  const { palette, colorId } = props;
  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  const shades = gatherShades(palette, colorId);

  const changeFormat = (e) => {
    setFormat(e.target.value);
  };
  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={color.hex}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <Navbar changeFormat={changeFormat} format={format} showSlider={false} />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter {...palette} />
    </div>
  );
};

export default SingleColorPalette;
