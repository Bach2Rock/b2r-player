import {gql} from '@apollo/client'


export const LOG = gql `
    
    mutation login($email: String!, $password:String!){
        login(email: $email, password: $password){
            token
            profile{
                _id
                name
                email
            }
        }
    }
`

export const ADD_PROFILE = gql`
  mutation addProfile(
    $name: String!,
    $email: String!,
    $password: String!
  ) {
    addProfile(
      name: $name,
      email: $email,
      password: $password
    ) {
      token
      profile {
        _id
        name
        email
      }
    }
  }
`
export const ADD_PLAYLIST = gql`
  mutation addPlaylist(
    $name: String!,
    $author: ID!,
    ) {
    addPlaylist(
      name: $name,
      author: $author,
      ) {
      name
      author
    }
  }
`;

export const ADD_TRACK = gql`
  mutation addTrack(
    $title: String!,
    $artist: String!,
    $album: String!,
    $image: String!,
    $audioSrc: String!
    ) {
    addTrack(
      title: $title,
      artist: $artist,
      album: $album,
      image: $image,
      audioSrc: $audioSrc
      ) {
      title
      artist
      album
      image
      audioSrc
    }
  }
`;

export const ADD_TO_PLAYLIST = gql `
  mutation AddTrack($id: ID!, $trackId: ID!) {
    addToPlaylist(_id: $id, trackId: $trackId) {
      name
    }
  }

`;

export const REMOVE_FROM_PLAYLIST = gql `
  mutation RemoveFromPlaylist($id: ID!, $trackId: ID!) {
    removeFromPlaylist(_id: $id, trackId: $trackId) {
      _id
    }
  }

`;

export const DELETE_TRACK = gql `
  mutation DeleteTrack($id: ID!) {
    deleteTrack(_id: $id) {
      _id
    }
  }
`;

export const DELETE_PLAYLIST = gql `
  mutation DeletePlaylist($id: ID!) {
    deletePlaylist(_id: $id) {
      _id
    }
  }
`;