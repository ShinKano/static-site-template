import React from 'react';
import styled from 'styled-components';
//
import FlexContainer from './FlexContainer';


export default () => (
    <AboutSection>
        <FlexContainer />
    </AboutSection>
);


const AboutSection = styled.div`
  position: relative;
  width: -webkit-fill-available;
  background-color: #fff;
  margin-top: 16px;
  color: #222;
  min-height: 680px;
`;
