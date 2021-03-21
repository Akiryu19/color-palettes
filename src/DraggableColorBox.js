import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
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
    '&:hover svg': {
      color: '#fff',
      transform: 'scale(1.4)',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
    padding: '10px',
    color: 'rgba(0,0,0,0.9)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: ' 12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  delete: {
    transition: 'all 0.3s ease',
  },
};

const DraggableColorBox = (props) => {
  const { color, name, classes, handleClick } = props;

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <span>
          <DeleteIcon className={classes.delete} onClick={handleClick} />
        </span>
      </div>
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
