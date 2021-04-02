import React from 'react';
import useStyles from './styles/MiniPaletteStyle';
import DeleteIcon from '@material-ui/icons/Delete';

const MiniPalette = (props) => {
  const { palette, id, openDialog, goToPalette } = props;

  const classes = useStyles();
  const deletePalette = (e) => {
    e.stopPropagation();
    openDialog(id);
  };
  const handleClick = () => {
    goToPalette(palette.id);
  };

  const miniColorBox = palette.colors.map((color) => (
    <div
      key={color.color}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
      <div className={classes.colors}>{miniColorBox}</div>
      <h5 className={classes.title}>
        {palette.paletteName}
        <span className={classes.emoji}> {palette.emoji}</span>
      </h5>
    </div>
  );
};

export default React.memo(MiniPalette);

//TODO: rerendering 问题待解决
