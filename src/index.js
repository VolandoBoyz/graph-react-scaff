import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import 'normalize.css';
import { ROUTES } from './settings';
import Navbar from './components/Navbar';
import Home from './routes/home';
import Fire from './routes/fire';

const client = new ApolloClient({});

const App = props =>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div className={`${props.className} app-container`}>
        <Navbar />
        <Switch>
          <Route path={ROUTES.fire} component={Fire} />
          <Route component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </ApolloProvider>
  ;

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
