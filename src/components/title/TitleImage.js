import React from 'react';
import styled from 'styled-components';
//
import title from '../../images/title.jpg';

export default () => (
    <TitleImage src={title}></TitleImage>
)

const TitleImage = styled.img`
  object-fit: cover;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
`;

