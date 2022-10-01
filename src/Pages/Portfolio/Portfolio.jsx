import React from 'react';
// icons
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { GitHub, Assignment } from '@material-ui/icons';
// pages
import resume from '../../utils/resume';
import './Portfolio.css';
import '../../App.css';
import CustomButton from '../../Components/Button/Button';
import TechSkills from './TechSkills';
import { ReactVideo } from 'reactjs-media';

import SoftSkills2 from './SoftSkills2';
import Pro from './Pro';
const Portfolio = () => {
  const [tabValue, setTabValue] = React.useState('All'); //for projects
  const [projectDialog, setProjectDialog] = React.useState(false); // for projects
  return (
    <Grid container className='section pb_45 pt_30 '>
      {/* Title */}
      <Grid item className='section__title mb_30 '>
        <span></span>
        <h6 className='section__title__text'>Projects</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor='white'
          className='customTabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={
              tabValue === 'All'
                ? 'customTabs__item active'
                : 'customTabs__item'
            }
          />
          {[...new Set(resume.projects.map((item) => item.tag))].map((tag) => (
            <Tab
              label={tag}
              value={tag}
              className={
                tabValue === tag
                  ? 'customTabs__item active'
                  : 'customTabs__item '
              }
            />
          ))}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resume.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === 'All' ? (
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className='customCard container_shadow '
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className='customCard__image'
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant='body2'
                            className='customCard__title'
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            className='customCard__caption'
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        fullWidth='true'
        className='projectDialog'
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        {projectDialog.vid ? (
          <ReactVideo
            className='projectDialog__vid'
            src={projectDialog.vid}
            poster={projectDialog.image}
            primaryColor='red'
          />
        ) : (
          <img
            src={projectDialog.image}
            alt='project'
            className='projectDialog__image'
          />
        )}
        {/* css of below div in buttons.css */}
        <div className='link__buttons'>
          <a
            href={projectDialog.link}
            style={{ textTransform: 'none' }}
            target='_blank'
          >
            <CustomButton text='GitHub' icon={<GitHub />} />
          </a>
          {projectDialog.link2 ? (
            <a
              href={projectDialog.link2}
              style={{ textTransform: 'none' }}
              target='_blank'
            >
              <CustomButton text='Blog' icon={<BorderColorIcon />} />
            </a>
          ) : null}
        </div>
        <DialogContent>
          <Typography className='projectDialog__description'>
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className='projectDialog__actions'>
          {projectDialog?.icons?.map((icon) => (
            <img width='25px' src={icon.icon} alt='apps' />
          ))}
        </DialogActions>
      </Dialog>

      {/* proficiency */}
      <Pro />

      {/* skills */}
      <Grid container>
        <Grid item className='section__title mb_30 top_60'>
          <span></span>
          <h6 className='section__title__text'>Technological Skills </h6>
        </Grid>
        {/* tech */}
        <TechSkills />

        {/* soft skills */}
        <Grid item className='section__title mb_30 top_60'>
          <span></span>
          <h6 className='section__title__text'>Soft Skills </h6>
        </Grid>
        {/* soft */}
        <SoftSkills2 />
      </Grid>
    </Grid>
  );
};

export default Portfolio;
