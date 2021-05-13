import React from 'react';
import './TechSkills.css';
import { GrMysql, GrReactjs } from 'react-icons/gr';
import { SiMaterialUi, SiBootstrap } from 'react-icons/si';
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiMongodb,
} from 'react-icons/di';
import { Grid } from '@material-ui/core';
const techskills = [
  {
    name: '• React • Redux',
    bg: '#2ccce4',
    icon: <GrReactjs size='9em' />,
  },
  {
    name: '• JavaScipt',
    bg: '#0D47A1',
    icon: <DiJavascript size='9em' />,
  },
  {
    name: '• NodeJs • ExpressJs ',
    bg: '#8BC34A',
    icon2: <DiNodejs size='9em' />,
  },
  {
    name: '• HTML5 • CSS3',
    bg: '#b80000',
    icon: <DiHtml5 size='5em' />,
    icon2: <DiCss3 size='5em' />,
  },

  {
    name: '• MongoDB • MySQl',
    bg: '#FF6F00',
    icon: <DiMongodb size='5em' />,
    icon2: <GrMysql size='5em' />,
  },
  {
    name: '•Material-UI •Bootstrap',
    bg: '#c32aa3',
    icon: <SiMaterialUi size='3em' />,
    icon2: <SiBootstrap size='4em' />,
  },
];
const TechSkills = () => {
  return (
    <Grid container className='main center'>
      {techskills.map((a, i) => {
        return (
          <Grid key={i} item className='box'>
            <div style={{ background: `${a.bg}` }} className='icon-box center'>
              <div style={{ paddingRight: '5px' }}> {a.icon}</div>
              {a.icon2 && <div> {a.icon2}</div>}
            </div>
            <div display='block' className='inner-box center'>
              <p>{a.name}</p>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TechSkills;
