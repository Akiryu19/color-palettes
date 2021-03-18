import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';
// const styles = {
//   Palette: {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   PaletteColors: { height: '90%' },
//   goBack: {
//     width: '20%',
//     height: (props) => (props.showFullPalette ? '25%' : '50%'),
//     margin: '0 auto',
//     marginBottom: '-3px',
//     display: 'inline-block',
//     position: 'relative',
//     cursor: 'pointer',
//     backgroundColor: '#000',
//     '& a': {
//       color: '#fff',
//       width: '100px',
//       height: '30px',
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       marginLeft: '-50px',
//       marginTop: '-15px',
//       textAlign: 'center',
//       outline: 'none',
//       background: 'rgba(255, 255, 255, 0.3)',
//       fontSize: ' 1rem',
//       lineHeight: '30px',
//       textTransform: 'uppercase',
//       border: 'none',
//       textDecoration: 'none',
//     },
//   },
// };
const SingleColorPalette = (props) => {
  const [format, setFormat] = useState('hex');
  const { palette, colorId, classes } = props;
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
      showFullPalette={false}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar changeFormat={changeFormat} format={format} showSlider={false} />
      <div className={classes.PaletteColors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${palette.id}/`}>Go back</Link>
        </div>
      </div>
      <PaletteFooter {...palette} />
    </div>
  );
};

export default withStyles(styles)(SingleColorPalette);
