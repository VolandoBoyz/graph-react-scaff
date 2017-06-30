import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from '../../settings';
import Bundle from '../../components/Bundle';
import Loading from '../../components/Loading';
// Import LoaderFire when is used
import LoadSongs from 'bundle-loader?lazy&name=[name]!./components/Songs.js';//eslint-disable-line
import LoadNew from 'bundle-loader?lazy&name=[name]!./components/New.js';//eslint-disable-line
import LoadSong from 'bundle-loader?lazy&name=[name]!./components/Song.js';//eslint-disable-line


const SongsRoute = props =>
  <Bundle load={LoadSongs}>
    {Songs => Songs ? <Songs {...props} /> : <Loading /> }
  </Bundle>;

const SongRoute = props =>
  <Bundle load={LoadSong}>
    {Song => Song ? <Song {...props} /> : <Loading /> }
  </Bundle>;

const NewRoute = props =>
  <Bundle load={LoadNew}>
    {New => New ? <New {...props} /> : <Loading /> }
  </Bundle>;

const Songs = props => (
  <div>
    <Link to={`${props.match.url}${ROUTES.new}`}>New song</Link>
    <Switch>
      <Route path={`${props.match.url}${ROUTES.new}`} component={NewRoute} />
      <Route path={`${props.match.url}/:id`} component={SongRoute} />
      <Route component={SongsRoute} />
    </Switch>
  </div>
  );

Songs.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Songs;

