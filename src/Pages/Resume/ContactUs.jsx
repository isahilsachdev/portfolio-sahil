import React from 'react';
import emailjs from 'emailjs-com';
import { Grid, TextField } from '@material-ui/core';

import './ContactUs.css';
import { Send } from '@material-ui/icons';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ryeabq6',
        'template_fyu3kgm',
        e.target,
        'user_JItjlaaC39J9N5PDeJYG9'
      )
      .then(
        (result) => {
          alert('Your mail is sent , you will get a response ASAP.');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form onSubmit={sendEmail}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name='name' label='Name' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth name='user_email' label='E-mail' />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name='message'
              label='Message'
              multiline
              rows={4}
            />
          </Grid>

          <div className='custom__btn'>
            <input
              type='submit'
              value='Submit'
              className='custom__btn__input'
            />
            <span className='custom__btn__icon'>
              <Send />
            </span>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
