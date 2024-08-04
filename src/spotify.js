// src/spotify.js
export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'https://livespotify.netlify.app/';
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const scopes = [
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played'
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
