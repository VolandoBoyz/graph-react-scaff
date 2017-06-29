import React from 'react';
import Bundle from '../../components/Bundle';
import Loading from '../../components/Loading';
// Import LoaderFire when is used
import LoadFire from 'bundle-loader?lazy&name=[name]!./containers/Fire.js';


export default () =>
  <Bundle load={LoadFire}>
    {Fire => Fire ? <Fire /> : <Loading /> }
  </Bundle>;
