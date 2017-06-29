import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongsList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => <li key={song.id}>{song.title}</li>);
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
};

const query = gql`
  query getAllSongs{
    songs{
      title
      id
    }
  }
`;


export default graphql(query)(SongsListStyled);
