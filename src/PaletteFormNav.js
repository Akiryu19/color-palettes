import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {},
}));

export default function PaletteFormNav(props) {
  const classes = useStyles();

  const [PaletteName, setPaletteName] = useState('');
  const { handleDrawerOpen, open } = props;

  const handlePaletteName = (e) => {
    setPaletteName(e.target.value);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }, [PaletteName, props.palettes]);

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
        <div classes={classes.navBtns}>
          <ValidatorForm onSubmit={() => props.handleSubmit(PaletteName)}>
            <TextValidator
              placeholder="Enter Palette Name"
              value={PaletteName}
              onChange={handlePaletteName}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Enter a palette name',
                'Palette name need to be unique',
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
}

// export default withStyles(styles, { withTheme: true })(PaletteFormNav);
