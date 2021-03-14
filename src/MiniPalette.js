import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Hidden } from '@material-ui/core';

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
  colors: { backgroundColor: 'gray' },
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
};
const MiniPalette = (props) => {
  const { classes } = props;
  const { palette } = props;

  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {palette.paletteName}
        <span className={classes.emoji}> {palette.emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette); //higher order component
