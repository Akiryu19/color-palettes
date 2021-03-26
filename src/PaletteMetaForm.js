import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default function PaletteMetaForm(props) {
  const [open, setOpen] = useState(true);
  const [PaletteName, setPaletteName] = useState('');

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setOpen(false);
    //   props.hideForm();
  };
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
    <Dialog
      open={open}
      onClose={props.hideForm}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => props.handleSubmit(PaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for you palette, make sure it's unique!
          </DialogContentText>
          <Picker set="apple" />
          <TextValidator
            fullWidth
            placeholder="Enter Palette Name"
            value={PaletteName}
            onChange={handlePaletteName}
            validators={['required', 'isPaletteNameUnique']}
            errorMessages={[
              'Enter a palette name',
              'Palette name need to be unique',
            ]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.hideForm} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            type="submit"
            variant="contained"
          >
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
