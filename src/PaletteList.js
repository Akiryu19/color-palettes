import React from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: '#fff',
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '5%',
  },
};
const PaletteList = (props) => {
  const { palettes, classes } = props;
  const goToPalette = (id) => {
    props.history.push(`/palette/${id}`);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Color</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((p) => (
            <MiniPalette key={p.id} palette={p} goToPalette={goToPalette} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
