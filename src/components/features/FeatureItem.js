import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { faDove } from '@fortawesome/free-solid-svg-icons';
import { faKiwiBird } from '@fortawesome/free-solid-svg-icons';
//
import AlignCenterH3 from '../atom/AlignCenterH3';
import Paragraph from '../atom/Paragraph';

const FeatureItemA = () => (
    <FutureItem>
        <AlignCenterH3><FontAwesomeIcon icon={faHippo} /></AlignCenterH3>
        <AlignCenterH3>Feature-A</AlignCenterH3>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer imperdiet sit amet augue vel elementum. Vestibulum vehicula viverra urna, 
            sed iaculis nisi egestas vitae. Vivamus porttitor nulla sapien, 
            vitae viverra eros iaculis scelerisque. Donec eget molestie diam, ac tincidunt ligula. 
            Proin ac sagittis est. In euismod tincidunt eros. Mauris iaculis gravida sodales.
        </Paragraph>
    </FutureItem>
);

const FeatureItemB = () => (
    <FutureItem>
        <AlignCenterH3><FontAwesomeIcon icon={faDove} /></AlignCenterH3>
        <AlignCenterH3>Feature-B</AlignCenterH3>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer imperdiet sit amet augue vel elementum. Vestibulum vehicula viverra urna, 
            sed iaculis nisi egestas vitae. Vivamus porttitor nulla sapien, 
            vitae viverra eros iaculis scelerisque. Donec eget molestie diam, ac tincidunt ligula. 
            Proin ac sagittis est. In euismod tincidunt eros. Mauris iaculis gravida sodales.
        </Paragraph>
    </FutureItem>
);

const FeatureItemC = () => (
    <FutureItem>
        <AlignCenterH3><FontAwesomeIcon icon={faKiwiBird} /></AlignCenterH3>
        <AlignCenterH3>Feature-C</AlignCenterH3>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer imperdiet sit amet augue vel elementum. Vestibulum vehicula viverra urna, 
            sed iaculis nisi egestas vitae. Vivamus porttitor nulla sapien, 
            vitae viverra eros iaculis scelerisque. Donec eget molestie diam, ac tincidunt ligula. 
            Proin ac sagittis est. In euismod tincidunt eros. Mauris iaculis gravida sodales.
        </Paragraph>
    </FutureItem>
);


const FutureItem = styled.div`
    padding: 16px;
`;

export {FeatureItemA, FeatureItemB, FeatureItemC};


