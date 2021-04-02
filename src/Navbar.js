import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import { IconButton, MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NavbarStyle';

const Navbar = (props) => {
  const { classes } = props;

  const [open, setOpen] = useState(true);
  const closeSnackBar = () => {
    setOpen(false);
  };
  useEffect(() => setOpen(true), [props.format]);
  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/color-palettes/">React Color Picker</Link>
      </div>
      {props.showSlider && (
        <div>
          <span className={classes.level}>Level:{props.level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={props.changeLevel}
            />
          </div>
        </div>
      )}
      <div className={classes.selectorContainer}>
        <Select value={props.format} onChange={props.changeFormat}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        message={`Format changed to ${props.format.toUpperCase()}`}
        open={open}
        autoHideDuration={3000}
        ContentProps={{ 'aria-describedby': 'message-id' }}
        onClose={closeSnackBar}
        action={[
          <IconButton
            onClick={closeSnackBar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      ></Snackbar>
    </header>
  );
};

export default withStyles(styles)(Navbar);
