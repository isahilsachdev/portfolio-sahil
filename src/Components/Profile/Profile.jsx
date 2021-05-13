import { Typography } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import './icons.css';
import '../../App.css';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import {
  GetAppSharp,
  GitHub,
  LinkedIn,
  PersonOutline,
  PersonOutlineOutlined,
} from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import resumeData from '../../utils/resume';
import CustomButton from '../Button/Button';
import Typical from 'react-typical';

const CustomTimelineItem = ({ title, text, link, icon }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className='timeline__content'>
        {link ? (
          <Typography className='timeline__text'>
            <span>{title} : </span>
            <a target='_blank' href={link}>
              {text}{' '}
            </a>
          </Typography>
        ) : (
          <Typography className='timeline__text'>
            <span>{title} : </span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  const openInNewTab = (url) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if (newTab) {
      newTab.opener = null;
    }
  };
  return (
    <div className='profile container_shadow  '>
      <div className='profile__name'>
        <Typography className='name'>SAHIL SACHDEV</Typography>
        <Typography className='title'>Full Stack Developer</Typography>
        <Typical
          steps={[
            'Backend',
            400,
            'Frontend',
            400,
            'Data structures and algorithms',
            400,
          ]}
          loop={Infinity}
          wrapper='p'
        />
      </div>
      <figure className='profile__image'>
        <img src='./hy2.jpg' alt='profile picture' />
      </figure>
      {/* profile icons */}

      <div className='profile__info '>
        <div className='box '>
          <a target='_blank' href='#' data-text='Sahil Sachdev'>
            <FaceIcon />
          </a>
          <a target='_blank' href='#' data-text='+91-7737191046'>
            <PhoneIphoneIcon />
          </a>
          <a
            target='_blank'
            href='mailto: isahilsachdev00@gmail.com'
            data-text='Email'
          >
            <EmailIcon />
          </a>
          <a
            target='_blank'
            href='https://github.com/isahilsachdev'
            data-text='GitHub'
          >
            <GitHubIcon />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/sahil-sachdev-8381541b1/'
            data-text='LinkedIn'
          >
            <LinkedInIcon />
          </a>
        </div>
        <br />
      </div>
      <div
        style={{ display: 'flex' }}
        onClick={() =>
          openInNewTab('https://pdfhost.io/v/H.icZGzOu_sahilresumepdf.pdf')
        }
        className='btn__container'
      >
        <CustomButton text='Resume' icon={<GetAppSharp />} />
      </div>
    </div>
  );
};

export default Profile;
