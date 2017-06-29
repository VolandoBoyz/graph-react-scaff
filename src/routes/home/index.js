import React from 'react';
import Bundle from '../../components/Bundle';
// Import LoaderFire when is used
import LoadHome from 'bundle-loader?lazy&name=[name]!./components/Home.js';
import Loading from '../../components/Loading';

export default () =>
  <Bundle load={LoadHome}>
    {Home => Home ? <Home /> : <Loading />}
  </Bundle>;
