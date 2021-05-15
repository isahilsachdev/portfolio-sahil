import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import { HomeRounded } from '@material-ui/icons';

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
              pathName === '/' ? 'header__link__active' : 'header__link'
            }
          >
            ABOUT
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName === '/portfolio'
                ? 'header__link__active'
                : 'header__link'
            }
          >
            PORTFOLIO
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
