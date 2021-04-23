import React from 'react';
import './Header.css';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import {
  HomeRounded,
  LabelImportantOutlined,
  Telegram,
} from '@material-ui/icons';
import resume from '../../utils/resume';
import CustomButton from '../Button/Button';

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expands='lg' sticky='top' className='header'>
      {/* home link */}
      <Nav.Link
        as={NavLink}
        to='/'
        className='header__navlink'
        style={{ padding: '0 !important' }}
      >
        <Navbar.Brand className='header__home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header__left'>
          {/* resume link */}
          <Nav.Link
            as={NavLink}
            to='/'
            className={
              pathName == '/' ? 'header__link__active' : 'header__link'
            }
          >
            ABOUT
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName == '/portfolio' ? 'header__link__active' : 'header__link'
            }
          >
            PORTFOLIO
          </Nav.Link>
        </Nav>
        <div className='header__right'>
          {Object.keys(resume.socials).map((key) => (
            <a href={resume.socials[key].link}>{resume.socials[key].icon}</a>
          ))}
          <CustomButton text='Contact Me' icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
