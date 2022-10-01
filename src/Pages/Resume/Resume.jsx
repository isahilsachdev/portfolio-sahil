import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import resume from '../../utils/resume';
import './Resume.css';
import '../../App.css';
import { School } from '@material-ui/icons';
import CustomTimeline, {
  CustomTimelineSeparator,
} from '../../Components/Timeline/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ContactUs from './ContactUs';

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid>
        <Grid container className='section pb_45 pt_45'>
          <Grid item className='section__title mb_30 '>
            <span></span>
            <h6 className='section__title__text'>About Me</h6>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' className='about__text'>
              {resume.about}
            </Typography>
          </Grid>
        </Grid>
        {/* education */}
        <Grid item xs={12}>
          <Grid container className='resume__timeline'>
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Education' icon={<School />}>
                {resume.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline__content'>
                      <Typography className='timeline__title'>
                        {education.title}
                      </Typography>

                      <Typography cariant='caption' className='timeline__date'>
                        {education.date}
                      </Typography>

                      <Typography
                        variant='body2'
                        className='timeline__description'
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* second */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Interests' icon={<PhoneIphoneIcon />}>
                {resume.interest.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline__content'>
                      <Typography className='timeline__title'>
                        {education.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline__description'
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* third */}
            <Grid item sm={12} md={12}>
              <CustomTimeline title='Experience' icon={<EmailIcon />}>
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <div style={{ paddingLeft: "16px" }}>
                      Inai Technologies (June 2021 - Present)
                    </div>
                  </TimelineItem>
                  <TimelineItem>
                    <CustomTimelineSeparator />
                  <TimelineContent className='timeline__content'>
                    <Typography
                      variant='body2'
                      className='timeline__description'
                    >
                      Technologies - ReactJS, JavaScript, HTML, CSS, Python (Fast API),
                      NodeJS (Express JS), Bootstrap, Reactstrap, Scss, Postman and
                      GitHub.
                    </Typography>
                  </TimelineContent>
                  </ TimelineItem>
                  <TimelineItem>
                    <CustomTimelineSeparator />
                  <TimelineContent className='timeline__content'>
                    <Typography
                      variant='body2'
                      className='timeline__description'
                    >
                      Worked on Inai Dashboard ( ReactJS ), Dashboard is used by our
                      customers to add and configure integrations for their customers.
                      Developed more than 5 pages and wrote unit tests.
                    </Typography>
                  </TimelineContent>
                  </ TimelineItem>
                  <TimelineItem>
                    <CustomTimelineSeparator />
                  <TimelineContent className='timeline__content'>
                    <Typography
                      variant='body2'
                      className='timeline__description'
                    >
                      Worked on Inai Checkout ( HTML5/CSS3 and Node.js ), which is
                      used by our merchant's customer to pay using integrated payment
                      methods.
                    </Typography>
                  </TimelineContent>
                  </ TimelineItem>
                  <TimelineItem>
                    <CustomTimelineSeparator />
                  <TimelineContent className='timeline__content'>
                    <Typography
                      variant='body2'
                      className='timeline__description'
                    >
                      Also, worked a bit on integrations and backend projects (Python and
                      Fast API) to integrate with different Payment Providers.
                    </Typography>
                  </TimelineContent>
                  </ TimelineItem>
                  <TimelineItem>
                    <CustomTimelineSeparator />
                  <TimelineContent className='timeline__content'>
                    <Typography
                      variant='body2'
                      className='timeline__description'
                    >
                      Maintained reusable code and unit tests for all changes, followed
                      componentization.
                    </Typography>
                  </TimelineContent>
                  </ TimelineItem>
                  <TimelineItem>
                    <CustomTimelineSeparator />
                  <TimelineContent className='timeline__content'>
                    <Typography
                      variant='body2'
                      className='timeline__description'
                    >
                      Coordinated with different teams, lead few sprints, and worked in
                      agile methodology
                    </Typography>
                  </TimelineContent>
                  </ TimelineItem>
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Contact */}
      <Grid container className='section pt_45 pb_45 '>
        <Grid item xs={10}>
          <Grid container>
            <Grid item className='section__title mb_30 '>
              <span></span>
              <h6 className='section__title__text'> Contact Form </h6>
            </Grid>
            <ContactUs />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
