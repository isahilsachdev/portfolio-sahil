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
import React from 'react';
import resume from '../../utils/resume';
import './Portfolio.css';
import '../../App.css';
import CustomTimeline from '../../Components/Timeline/Timeline';
import { ComputerSharp, GitHub } from '@material-ui/icons';
import Progress from './Progress';
import './Progress.css';
import CustomButton from '../../Components/Button/Button';
import { ReactVideo } from 'reactjs-media';
const Portfolio = () => {
  const [tabValue, setTabValue] = React.useState('All');
  const [projectDialog, setProjectDialog] = React.useState(false);
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
              tabValue == 'All' ? 'customTabs__item active' : 'customTabs__item'
            }
          />
          {[...new Set(resume.projects.map((item) => item.tag))].map((tag) => (
            <Tab
              label={tag}
              value={tag}
              className={
                tabValue == tag
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
              {tabValue == project.tag || tabValue == 'All' ? (
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
      {/* dialog */}
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
        <a
          href={projectDialog.link}
          style={{ textTransform: 'none' }}
          className='p_30 '
        >
          <CustomButton text='Learn more' icon={<GitHub />} />
        </a>
        <DialogContent>
          <Typography className='projectDialog__description'>
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className='projectDialog__actions'>
          {projectDialog?.icons?.map((icon) => (
            <img width='25px' src={icon.icon} alt='' />
          ))}
        </DialogActions>
      </Dialog>
      {/* proficiency */}
      <Grid container className='section pb_45 pt_45 top_30 '>
        <Grid item className='section__title mb_30'>
          <span></span>
          <h6 className='section__title__text'>Proficiency</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {resume.proficiency.map((pro) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='pro container_shadow '>
                  <div className='pro__div__image  '>
                    <img
                      src={pro.image}
                      alt='proficiency'
                      className='pro__image'
                    />
                  </div>
                  <Typography variant='h5' className='pro__name'>
                    {pro.name}
                  </Typography>
                  <Typography className='pro__description' variant='body2'>
                    {pro.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* skills */}
      <Grid container>
        <Grid item className='skills container_shadow'>
          <Typography className='skills__name mb_30 ' variant='h3'>
            TECH SKILLS
          </Typography>
          <Grid>
            <h3>• React </h3>
            <Progress done='80' />
          </Grid>
          <Grid>
            <h3>• JavaScript</h3>
            <Progress done='90' />
          </Grid>
          <Grid>
            <h3>• HTML5 • CSS3 </h3>
            <Progress done='70' />
          </Grid>
          <Grid>
            <h3>• NodeJs • ExpressJs </h3>
            <Progress done='40' />
          </Grid>
          <Grid>
            <h3>• MongoDB • MySQl </h3>
            <Progress done='50' />
          </Grid>
        </Grid>
        {/* soft skills */}

        <Grid item className='skills container_shadow'>
          <Typography className='skills__name mb_30 ' variant='h3'>
            SOFT SKILLS
          </Typography>
          <Grid>
            <h3>• Communication </h3>
            <Progress done='80' />
          </Grid>
          <Grid>
            <h3>• Remote work and online Collaboration </h3>
            <Progress done='70' />
          </Grid>
          <Grid>
            <h3>• Problem Solving </h3>
            <Progress done='80' />
          </Grid>
          <Grid>
            <h3>• Adaptability </h3>
            <Progress done='90' />
          </Grid>
          <Grid>
            <h3>• Proactive </h3>
            <Progress done='90' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
