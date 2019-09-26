import React from 'react';
import styled from 'styled-components';
//
import about from '../../images/about.jpg';


export default () => (
    <>
        <PositionRelative>
            <SquareBrown />
            <AboutPhoto src={about} />
            <SquareDarkBrown />
        </PositionRelative>
    </>
);


const PositionRelative = styled.div`
    position: relative;
    width: 100%;
`;

const SquareBrown = styled.div`
    display: block;
    height: 0px;
    width: 50%;
    padding-bottom: 50%;
    background-color: #AA917A;
    position: absolute;
    right: 4%;
    top: 70px;
`;

const SquareDarkBrown = styled.div`
    display: block;
    height: 0px;
    width: 70%;
    padding-bottom: 70%;
    background-color: #5C4D52;
    position: absolute;
    top: 165px;
`;

const AboutPhoto = styled.img`
    display: block;
    width: 70%;
    position: inherit;
    top: 116px;
    margin: 0 auto;
    z-index: 2;    
`;