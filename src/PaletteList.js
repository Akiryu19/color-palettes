import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { blue } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyle';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PaletteList = (props) => {
  const { palettes, classes, deletePalette } = props;
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const goToPalette = (id) => {
    props.history.push(`/palette/${id}`);
  };
  const openDialog = (id) => {
    setOpen(true);
    setDeleteId(id);
  };
  const closeDialog = () => {
    setOpen(false);
    setDeleteId('');
  };
  const ConfirmDelete = () => {
    deletePalette(deleteId);
    closeDialog();
  };
  console.log('test');

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((p) => (
            <CSSTransition timeout={200} key={p.id} classNames="fade">
              <MiniPalette
                key={p.id}
                id={p.id}
                palette={p}
                goToPalette={goToPalette}
                // handleDelete={deletePalette}
                openDialog={openDialog}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <Dialog open={open} aria-labelledby="delete-dialog" onClose={closeDialog}>
        <DialogTitle id="delete-dialog-title">
          Are you sure to delete this palette?
        </DialogTitle>
        <List>
          <ListItem button onClick={ConfirmDelete}>
            <ListItemAvatar>
              <Avatar style={{ color: red[100], backgroundColor: red[600] }}>
                <CheckIcon></CheckIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Yes, I want to delete it" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ color: blue[100], backgroundColor: blue[600] }}>
                <CloseIcon></CloseIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
