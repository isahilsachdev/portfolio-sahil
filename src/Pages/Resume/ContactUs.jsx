import React from 'react';
import emailjs from 'emailjs-com';
import { Grid, TextField } from '@material-ui/core';

import './ContactUs.css';
import { Send } from '@material-ui/icons';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

export function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(8),
    },
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
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
          handleClick();
          // <Alert />;
          // alert('Your mail is sent , you will get a response ASAP.');
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
            <div className='custom__btn__container'>
              <span className='custom__btn__icon'>
                <Send />
              </span>
            </div>
            <div className={classes.root}>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity='success'>
                  Sahil has received your mail and will return to you ASAP.
                </Alert>
              </Snackbar>
            </div>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
