import './App.css';
import { Container, Grid } from '@material-ui/core';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main-content container_shadow '>
              <Switch>
                <Route exact path='/'>
                  <Resume />
                </Route>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
