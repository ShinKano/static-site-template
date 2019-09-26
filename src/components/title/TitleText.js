import React from 'react';
import styled from 'styled-components';
//


export default () => (
    <TitleTextBg>
        <TitleText>SOLARIS</TitleText>
    </TitleTextBg>
);

const baseColor = "#222";

const TitleTextBg = styled.div`
    background-color: #5C4D52;
    position: absolute;
    margin-top: -4px;
    width: -webkit-fill-available;
    color: ${baseColor};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const TitleText = styled.h1`
  text-align: center;
  font-size: 40px;
  letter-spacing: .5em;
  color: #fff;
`;



