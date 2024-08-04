// src/components/LastPlayed.js
import React from 'react';
import styled from 'styled-components';

const LastPlayed = ({ track }) => {
  if (!track) return null;

  return (
    <TrackCard>
      <TrackImage src={track.album.images[0].url} alt={track.name} />
      <TrackInfo>
        <TrackName>{track.name}</TrackName>
        <ArtistName>{track.artists[0].name}</ArtistName>
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
`;

const TrackImage = styled.img`
  width: 100%;
  border-radius: 10px;
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

export default LastPlayed;
