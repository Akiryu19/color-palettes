import React from 'react';
import { Link } from 'react-router-dom';

const PaletteList = (props) => {
  const { palettes } = props;

  return (
    <div>
      {palettes.map((p) => (
        <div key={p.id}>
          <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
        </div>
      ))}
    </div>
  );
};

export default PaletteList;
