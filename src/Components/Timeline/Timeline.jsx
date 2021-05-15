import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import './Timeline.css';
export default function CustomTimeline({ title, icon, children }) {
  return (
    <Timeline className='timeline'>
      {/* header item */}
      <TimelineItem className='timeline_first'>
        <TimelineSeparator>
          <TimelineDot className='timeline__dot__header'>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h4' className='timeline__header'>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>

    /* remaining items */
  );
}
export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className='separator__padding'>
      <TimelineDot variant='outlined' className='timeline__dot' />
      <TimelineConnector />
    </TimelineSeparator>
  );
};
