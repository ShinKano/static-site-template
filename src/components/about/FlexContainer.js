import React from 'react';
import styled from 'styled-components';
//
import PhotoWidthBox from './PhotoWidthBox'
import AboutText from './AboutText';

export default () => (
  <>
    <FlexContainer>
      <FlexColTow>
        <PhotoWidthBox />
      </FlexColTow>
      <FlexColOne>
        <AboutText />
      </FlexColOne>
    </FlexContainer>
  </>
);

const FlexContainer = styled.div`
  padding: 40px;
  display: flex;
  @media screen and (max-width: 740px) {
    display: block;
  }
`;

const FlexColTow = styled.div`
  flex: 2;
  max-width: 640px;
`;

const FlexColOne = styled.div`
  flex: 1;
`;