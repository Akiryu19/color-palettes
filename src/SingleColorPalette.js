import React, { useState } from 'react';
import ColorBox from './ColorBox';

const SingleColorPalette = (props) => {
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
  console.log(shades);
  const colorBoxes = shades.map((color) => (
    <ColorBox
      key="color.hex"
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));
  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default SingleColorPalette;
