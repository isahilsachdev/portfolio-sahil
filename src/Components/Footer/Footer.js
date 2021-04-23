import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <Typography className='footer__name'>Sahil Sachdev</Typography>
      </div>
      <div>
        <Typography className='footer__credit'>
          Designed and Developed by
          <a href='/'> Sahil Sachdev </a>.
          <br />
          Technologies used were <span>Reactjs</span> , <span> Bootstrap</span>{' '}
          and <span>MaterialUi</span> .
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
