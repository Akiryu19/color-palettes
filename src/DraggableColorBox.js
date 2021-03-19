import { withStyles } from '@material-ui/styles';
import React from 'react';

const styles = {
  root: {
    height: '20%',
    width: '25%',
    margin: '0 auto',
    marginBottom: '-3px',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover button': {
      opacity: 1,
    },
  },
};

const DraggableColorBox = (props) => {
  const { color, classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {color}
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
