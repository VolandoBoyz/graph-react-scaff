import gql from 'graphql-tag';

export const addSong = gql`
mutation AddSong($title: String) {
  addSong(title: $title) {
    title
    id
  }
}
 `;

export const getSongs = gql`
  query getAllSongs{
    songs{
      title
      id
    }
  }
`;

export const getSong = gql`
  query GetSong($id: ID!) {
    song(id: $id){
      title
      id
      lyrics{
        id
        content
        likes
      }
    }
  }
`;

export const deleteSong = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id){
      id
      title
    }
  }
`;

export const addLyricToSong = gql`
mutation AddLyricToSong($songId: ID, $content: String){
  addLyricToSong(songId:$songId, content:$content){
    title
    id
    lyrics{
      id
      content
      likes
    }
  }
}
`;

export const likeLyric = gql`
mutation LikeLyric($id: ID){
  likeLyric(id: $id){
    content
    id
    likes
  }
}
`;
