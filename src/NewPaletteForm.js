import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import useStyles from './styles/NewPaletteFormStyles';

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const [colors, setColors] = useState([]);

  const maxColors = 20;
  const isPaletteFull = colors.length >= maxColors;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };
  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
    props.savePalette(newPalette);
    props.history.push('/color-palettes/');
  };

  const removeColor = (colorName) =>
    setColors(colors.filter((color) => color.name !== colorName));

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const randomColorHex = `#${Math.random().toString(16).substr(2, 6)}`;
    const randomColor = { color: randomColorHex, name: randomColorHex };
    setColors([...colors, randomColor]);
    // const allColors = props.palettes.map((p) => p.colors).flat();
    // //排除重复颜色
    // const filteredColors = allColors.filter((color) => !colors.includes(color));
    // const ranNum = Math.floor(Math.random() * filteredColors.length);
    // if (filteredColors.length !== 0) {
    //   const randomColor = filteredColors[ranNum];
    //   setColors([...colors, randomColor]);
    // } else {
    //   alert(
    //     'To generate more random colors, you need to add more color Palettes :('
    //   );
    // }
  };

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setColors(arrayMove(colors, oldIndex, newIndex));

  return (
    <div className={classes.root}>
      <PaletteFormNav
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        classes={classes}
        palettes={props.palettes}
        handleSubmit={handleSubmit}
        colors={colors}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h5" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={isPaletteFull}
            >
              Random color
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className={classes.button}
            >
              Clear Palette
            </Button>
          </div>

          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            colors={colors}
            addNewColor={addNewColor}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
