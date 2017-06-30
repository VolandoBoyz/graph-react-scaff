import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { addSong, getSongs } from '../../../queries';


class NewSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }
  handleSubmit(e) {
    this.props.mutate({
      variables: {
        title: this.state.term,
      },
    });
    e.preventDefault();
  }
  render() {
    return (
      <section className={`${this.props.className} new-songs-route`}>
        <h1>New song</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input onChange={e => this.setState({ term: e.target.value })} value={this.state.term} />
          <button type='submit'>Save</button>
        </form>
      </section>
    );
  }
}
const NewSongStyled = styled(NewSong)`
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
NewSong.propTypes = {
  className: PropTypes.string.isRequired,
  mutate: PropTypes.func.isRequired,
};


export default graphql(addSong)(NewSongStyled);
