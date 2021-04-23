import { Button } from '@material-ui/core';
import React from 'react';
import './Button.css';

const CustomButton = ({ text, icon }) => {
  return (
    <Button
      className='custom__btn'
      endIcon={icon ? <div className='btn__icon__container'>{icon}</div> : null}
    >
      <span className='btn__text'>{text}</span>
    </Button>
  );
};

export default CustomButton;
