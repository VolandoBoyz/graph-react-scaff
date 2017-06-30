import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
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
import Songs from './routes/songs';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface,
});

const App = props =>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div className={`${props.className} app-container`}>
        <Navbar />
        <Switch>
          <Route path={ROUTES.songs} component={Songs} />
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
