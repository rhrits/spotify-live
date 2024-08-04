// src/components/CurrentlyPlaying.js
import React from 'react';
import styled from 'styled-components';

const CurrentlyPlaying = ({ track, onPlay }) => {
  if (!track) return null;

  const handlePlay = () => {
    if (track.uri) {
      onPlay(track.uri);
    }
  };

  const handleRedirect = () => {
    if (track.external_urls.spotify) {
      window.open(track.external_urls.spotify, '_blank');
    }
  };

  return (
    <TrackCard>
      <LiveIndicator>Live Playing</LiveIndicator>
      <TrackImage src={track.album.images[0].url} alt={track.name} onClick={handleRedirect} />
      <TrackInfo>
        <TrackName>{track.name}</TrackName>
        <ArtistName>{track.artists[0].name}</ArtistName>
        <ProgressBar>
          <Progress />
        </ProgressBar>
      </TrackInfo>
      
    </TrackCard>
  );
};

const TrackCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const LiveIndicator = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1db954;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  animation: pulse 1.5s infinite;
  display: flex;
  align-items: center;
  gap: 5px;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TrackImage = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

const TrackInfo = styled.div`
  margin-top: 10px;
`;

const TrackName = styled.h2`
  color: white;
  font-size: 18px;
`;

const ArtistName = styled.p`
  color: #b3b3b3;
  font-size: 14px;
`;

const ProgressBar = styled.div`
  background-color: #282828;
  border-radius: 10px;
  height: 5px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
`;

const Progress = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(29, 185, 84, 0.6) 0%, rgba(29, 185, 84, 0) 100%);
  animation: progressAnimation 2s infinite;
  
  @keyframes progressAnimation {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const FollowMe = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: white;

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SpotifyLogo = styled.img`
  width: 24px;
  height: 24px;
`;

export default CurrentlyPlaying;
