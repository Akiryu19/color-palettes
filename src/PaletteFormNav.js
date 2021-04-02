import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useStyles from './styles/PlatteFormNavStyles';
import PaletteMetaForm from './PaletteMetaForm';

export default function PaletteFormNav(props) {
  const classes = useStyles();
  const [formShowing, setFormShowing] = useState(false);
  const { handleDrawerOpen, open, palettes, handleSubmit, colors } = props;
  const showForm = () => {
    setFormShowing(true);
  };
  const hideForm = () => {
    setFormShowing(false);
  };
  return (
    <div>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/color-palettes/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={showForm}
            disabled={colors.length === 0}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={palettes}
          handleSubmit={handleSubmit}
          hideForm={hideForm}
        />
      )}
    </div>
  );
}
