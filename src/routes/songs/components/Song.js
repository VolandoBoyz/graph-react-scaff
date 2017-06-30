import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getSong, addLyricToSong, likeLyric } from '../../../queries';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  onLike(id, likes) {
    this.props.likeLyric({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          __typename: 'LyricType',
          id,
          likes: likes + 1,
        },
      },
    });
  }
  renderLyrics() {
    const { song } = this.props.data;
    return song.lyrics.map(lyric =>
      <li
        key={lyric.id}
      >
        {lyric.content}
        <button onClick={() => this.onLike(lyric.id, lyric.likes)}>Like</button>
        {lyric.likes}
      </li>
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addLyricToSong({
      variables: {
        songId: this.props.data.song.id,
        content: this.state.term,
      },
    }).then(() => {
      this.setState({ term: '' });
    }
  );
  }
  render() {
    const { song } = this.props.data;
    if (this.props.data.loading) return <span>Loading...</span>;
    return (
      <section>
        <h1>{song.title}</h1>
        <ul>
          {this.renderLyrics()}
        </ul>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Add lyric</label>
          <input onChange={e => this.setState({ term: e.target.value })} value={this.state.term} />
        </form>
      </section>
    );
  }
}

export default compose(
  graphql(likeLyric, { name: 'likeLyric' }),
  graphql(
  getSong,
  { options: props => ({ variables: { id: props.match.params.id } }) }
  ),
  graphql(addLyricToSong, { name: 'addLyricToSong' })
)(Song);
