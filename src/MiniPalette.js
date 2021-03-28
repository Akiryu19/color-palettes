import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyle';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = (props) => {
  const { classes, palette, handleDelete, id } = props;

  const deletePalette = (e) => {
    e.stopPropagation();
    handleDelete(id);
  };

  const miniColorBox = palette.colors.map((color) => (
    <div
      key={color.color}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={() => props.goToPalette(palette.id)}>
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />

      <div className={classes.colors}>{miniColorBox}</div>
      <h5 className={classes.title}>
        {palette.paletteName}
        <span className={classes.emoji}> {palette.emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette); //higher order component
