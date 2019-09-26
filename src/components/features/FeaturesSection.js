import React from 'react';
import styled from 'styled-components';
//
import { FlexParent } from '../atom/FlexParent';
import FlexChildOne from '../atom/FlexChild';
import Divider from '../atom/Divider';
import { FeatureItemA, FeatureItemB, FeatureItemC } from './FeatureItem';



export default () => (
    <FeaturesSection>
        <FlexParent>
            <FlexChildOne>
                <FeatureItemA />
            </FlexChildOne>
            <FlexChildOne>
                <FeatureItemB />
            </FlexChildOne>
            <FlexChildOne>
                <FeatureItemC />
            </FlexChildOne>
        </FlexParent>
        <Divider />
    </FeaturesSection>
);

const FeaturesSection = styled.div`
    background-color: #5C4D52;
    padding: 40px;
`;