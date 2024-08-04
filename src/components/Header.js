// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Spotify</HeaderTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: #1db954;
  width: 100%;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const HeaderTitle = styled.h1`
  color: white;
  font-size: 24px;
`;

export default Header;
