import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import { IconButton, MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [open, setOpen] = useState(true);
  const closeSnackBar = () => {
    setOpen(false);
  };
  useEffect(() => setOpen(true), [props.format]);
  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">React Color Picker</Link>
      </div>
      <div className="slider-container">
        <span>Level:{props.level}</span>
        <div className="slider">
          <Slider
            defaultValue={props.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={props.changeLevel}
          />
        </div>
      </div>
      <div className="select-container">
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

export default Navbar;
