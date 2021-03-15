import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: '#fff',
    border: '1px solid #000',
    borderRadius: '5px',
    padding: '0.5em',
    position: 'relative',
    overflow: 'hidden',
    '& :hover': {
      cursor: 'pointer',
    },
  },
  colors: {
    backgroundColor: '#eee',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    margin: 0,
    color: '#000',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: { marginLeft: '1rem', fontSize: '1.5rem' },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
  },
};
const MiniPalette = (props) => {
  const { classes, palette } = props;
  const miniColorBox = palette.colors.map((color) => (
    <div
      key={color.color}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={() => props.goToPalette(palette.id)}>
      <div className={classes.colors}>{miniColorBox}</div>
      <h5 className={classes.title}>
        {palette.paletteName}
        <span className={classes.emoji}> {palette.emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette); //higher order component
