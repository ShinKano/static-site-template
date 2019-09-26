import React from 'react';
import styled from 'styled-components';
//
import Paragraph from '../atom/Paragraph';

export default () => (
  <Textbox>
    <h3>About Our Company</h3>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer imperdiet sit amet augue vel elementum. Vestibulum vehicula viverra urna, 
        sed iaculis nisi egestas vitae. Vivamus porttitor nulla sapien, 
        vitae viverra eros iaculis scelerisque. Donec eget molestie diam, ac tincidunt ligula. 
        Proin ac sagittis est. In euismod tincidunt eros. Mauris iaculis gravida sodales.
    </Paragraph>
  </Textbox>
);


const Textbox = styled.div`
    padding: 40% 10px 40px 10px;
    text-align: center;
    @media screen and (max-width: 680px) {
    display: block;
    padding: 170px 10px 40px 10px;
  }
`;