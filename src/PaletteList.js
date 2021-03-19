import React from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyle';
import { Link } from 'react-router-dom';

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
          <Link to="/palette/new">Create palette</Link>
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
