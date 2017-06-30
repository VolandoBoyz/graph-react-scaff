import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { getSongs, deleteSong } from '../../../queries';

class SongsList extends Component {
  deleteSong(id) {
    this.props.mutate({
      variables: {
        id,
      },
     // refetchQueries: [{ query: getSongs }],
    })
    // Can use data.refetch if the refetch query is already in the component
      .then(() => this.props.data.refetch())
    ;
  }

  renderSongs() {
    return this.props.data.songs.map(song =>
      <li key={song.id}>
        {song.title}
        <button onClick={() => this.deleteSong(song.id)}>Delete</button>
      </li>);
  }
  render() {
    if (this.props.data.loading) return <span>loading</span>;
    return (
      <section className={`${this.props.className} home-route`}>
        <h1>Songs List 🎤</h1>
        <ul>
          {this.renderSongs()}
        </ul>
      </section>
    );
  }
}
const SongsListStyled = styled(SongsList)`
  height: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2{
    font-size: 50px;
  }
  a {
    text-decoration: none;
    color: #007AFF;
  }
`;
SongsList.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
};


export default graphql(getSongs)(
  graphql(deleteSong)(SongsListStyled)
);
