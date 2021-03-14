import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const PaletteList = (props) => {
  const { palettes } = props;

  return (
    <div>
      {palettes.map((p) => (
        <MiniPalette key={p.id} palette={p} />
      ))}
    </div>
  );
};

export default PaletteList;
