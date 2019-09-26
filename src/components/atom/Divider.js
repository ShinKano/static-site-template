import React from 'react';
import styled from 'styled-components';


export default () => (
    <FlexParent>
        <FlexChildTwo>
            <Border />
        </FlexChildTwo>
        <FlexChildOne>
            <BorderContentDiv>
                <h4>Price List</h4>
            </BorderContentDiv>
        </FlexChildOne>
        <FlexChildTwo>
            <Border />
        </FlexChildTwo>
    </FlexParent>
);


const FlexParent = styled.div`
    margin-top: 84px;
    display: flex;
`;

const FlexChildOne = styled.div`
    flex: 1.5;
`;

const FlexChildTwo = styled.div`
    flex: 2;
`;

const Border = styled.div`
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid;
    position: relative;
    right: -1px;
`;

const BorderContentDiv = styled.div`
    width: 100%;
    border: 1px solid;
    position: relative;
    top: -32px;
    text-align: center;
`;

