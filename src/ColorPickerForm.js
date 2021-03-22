import React, { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const ColorPickerForm = (props) => {
  const { isPaletteFull, colors, addNewColor } = props;
  const [newName, setNewName] = useState('');
  const [currentColor, setCurrentColor] = useState('#a4aa99');
  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const updateCurrentcolor = (newColor) => {
    setCurrentColor(newColor.hex);
  };
  const handleSubmit = () => {
    const newColor = { color: currentColor, name: newName };
    addNewColor(newColor);
    setNewName('');
  };
  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      return colors.every(
        (color) => color.name.toUpperCase() !== value.toUpperCase()
      );
    });
    ValidatorForm.addValidationRule('isColorValueUnique', (value) => {
      return colors.every(({ color }) => color !== value);
    });
  }, [colors, currentColor]);
  return (
    <>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentcolor}
      />
      <div>
        <ValidatorForm onSubmit={handleSubmit}>
          <TextValidator
            placeholder="Enter Color Name"
            value={newName}
            onChange={handleChange}
            validators={['required', 'isColorNameUnique']}
            errorMessages={[
              'Enter a color name',
              'Color name need to be unique',
            ]}
          />
          <TextValidator
            value={currentColor}
            onChange={handleChange}
            validators={['required', 'isColorValueUnique']}
            errorMessages={['this field is required', 'Color is Already used']}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              backgroundColor: isPaletteFull ? '#999' : currentColor,
            }}
            disabled={isPaletteFull}
          >
            {isPaletteFull ? 'Colors is full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    </>
  );
};

export default ColorPickerForm;
