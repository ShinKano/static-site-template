import React from 'react';
import styled from 'styled-components';
//
import TitleImage from './TitleImage';
import TitleText from './TitleText';



export default () => (
  <>
    <TitleSection>
      <TitleImage />
    </TitleSection>
    <TitleText />
  </>
);



const TitleSection = styled.div`
  position: relative;
  height: 75vh;
`;
