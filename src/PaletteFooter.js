import React from 'react';

const PaletteFooter = (props) => {
  const { paletteName, emoji } = props;
  console.log(props);
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji"> {emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
