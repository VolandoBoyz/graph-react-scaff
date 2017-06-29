import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import 'normalize.css';
import { ROUTES } from './settings';
import Home from './routes/home';
import Fire from './routes/fire';
import Navbar from './components/Navbar';

const App = props =>
  <Router>
    <div className={`${props.className} app-container`}>
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route path={ROUTES.fire} component={Fire} />
        <Route component={Home} />
      </Switch>
    </div>
  </Router>;

const AppStyled = styled(App)`
  font-family: helvetica;
  height: 100%;
`;

App.propTypes = {
  className: PropTypes.string.isRequired,
};

ReactDOM.render(
  <AppStyled />
  , document.getElementById('root'));
