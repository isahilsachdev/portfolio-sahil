import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Grow,
  Typography,
} from '@material-ui/core';
import React from 'react';
import resume from '../../utils/resume';
import './Portfolio.css';
import '../../App.css';
const Pro = () => {
  return (
    <>
      <Grid item className='section__title mb_30 top_60'>
        <span></span>
        <h6 className='section__title__text'>Proficiency</h6>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resume.proficiency.map((pro) => (
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Grow in timeout={1000}>
                <Card className='customCard container_shadow '>
                  <CardActionArea>
                    <div style={{ height: '200px' }}>
                      <CardMedia
                        className='customCard__image'
                        image={pro.image}
                        title={pro.name}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <CardContent>
                      <Typography variant='body2' className='customCard__title'>
                        {pro.name}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='customCard__caption'
                      >
                        {pro.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Pro;
