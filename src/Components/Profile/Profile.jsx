import { Typography } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import '../../App.css';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import { GetAppSharp, PersonOutlineOutlined } from '@material-ui/icons';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import resumeData from '../../utils/resume';
import CustomButton from '../Button/Button';
import Typical from 'react-typical';
const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className='timeline__content'>
        {link ? (
          <Typography className='timeline__text'>
            <span>{title} : </span>
            <a href={link}>{text} </a>
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

      <div className='profile__info'>
        <CustomTimeline icon={<PersonOutlineOutlined />}>
          <CustomTimelineItem title='Name' text='Sahil Sachdev' />
          <CustomTimelineItem title='Mobile' text='7737191046' />
          <CustomTimelineItem title='Title' text='Full Stack Developer' />
          <CustomTimelineItem title='Email' text='isahilsachdev00@gmail.com' />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div
          style={{ display: 'flex' }}
          onClick={() =>
            openInNewTab('https://pdfhost.io/v/H.icZGzOu_sahilresumepdf.pdf')
          }
          className='btn__container'
        >
          <CustomButton text='Download Cv' icon={<GetAppSharp />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
