// src/App.js
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl, loginUrl } from './spotify';
import Header from './components/Header';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import LastPlayed from './components/LastPlayed';
import styled from 'styled-components';

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [lastPlayed, setLastPlayed] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMyCurrentPlayingTrack().then((response) => {
        setCurrentlyPlaying(response.item);
      });

      spotify.getMyRecentlyPlayedTracks().then((response) => {
        setLastPlayed(response.items[0].track); // Store the last played song
      });
    }
  }, []);

  const handlePlay = (uri) => {
    spotify.play({ uris: [uri] });
  };

  return (
    <AppContainer>
      {!token ? (
        <LoginContainer>
          <LoginButton href={loginUrl}>Login with Spotify</LoginButton>
          <LoginText>Hritik ❤️ Spotify</LoginText>
        </LoginContainer>
      ) : (
        <>
          <Header />
          <MainContent>
            <Title>Hritik ❤️ Spotify</Title>
            <CurrentlyPlaying track={currentlyPlaying} onPlay={handlePlay} />
            {!currentlyPlaying && lastPlayed && <LastPlayed track={lastPlayed} />}
            <FollowButton href="https://open.spotify.com/user/0mjqcqpix4awueoajdyfcd5to?si=dae3c3b029754dd5" target="_blank">
              Follow me on Spotify
            </FollowButton>
          </MainContent>
        </>
      )}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background-color: #121212;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #181818;
`;

const LoginButton = styled.a`
  background-color: #1db954;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  margin: 10px;
  &:hover {
    background-color: #1ed760;
  }
`;

const LoginText = styled.p`
  color: white;
  font-size: 24px;
  margin-top: 10px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #121212;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const FollowButton = styled.a`
  background: transparent;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  border: 2px solid white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-top: 20px;
  &:hover {
    border-color: #1db954;
    color: #1db954;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(29, 185, 84, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: rotate 3s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export default App;
