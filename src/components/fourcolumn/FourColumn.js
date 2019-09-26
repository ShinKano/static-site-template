import React from 'react';
import styled from 'styled-components';
//
import {FlexParentNoCol} from '../atom/FlexParent';
import FlexChild from '../atom/FlexChild';
import Paragraph from '../atom/Paragraph';

export default () => (

    <FlexParentNoCol>
        <FlexChild>
            <PaddingDiv>
                <h3>Egestas & Elit.</h3>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer imperdiet sit amet augue vel elementum. Vestibulum vehicula viverra urna, 
                    sed iaculis nisi egestas vitae. 
                </Paragraph>
            </PaddingDiv>
        </FlexChild>

        <FlexChild>
            <AlignDiv>
                <ImageA />
            </AlignDiv>
            
            <SquareBrown />
        </FlexChild>

        <FlexChild>
            <SquareDarkBrown />
            <AlignDiv>
                <ImageA />
            </AlignDiv>
        </FlexChild>


    </FlexParentNoCol>
);

const PaddingDiv = styled.div`
    padding: 50px 10%;
`;

const SquareDarkBrown = styled.div`
    width: -webkit-fill-available;
    
    margin-right: 12px;
    height: 140px;
    background-color: #5C4D52;
    max-width: 200px;
    margin: 0 12px 12px auto;

`;

const SquareBrown = styled.div`
    width: -webkit-fill-available;
    margin-right: 12px;
    height: 140px;
    background-color: #A7937B;
    margin-top: 9px;
    max-width: 200px;
    margin: 0 12px 12px auto;
`;

const ImageA = styled.img`
    width: -webkit-fill-available;
    /* margin-right: 12px; */
    height: 420px;
    background-color: paleturquoise;
    margin-top: 12px;
`;

const AlignDiv = styled.div`
    max-width: 200px;
    margin: 0 12px 12px auto;
`;