import styled from 'styled-components';

const FlexParent = styled.div`
    display: flex;
    @media screen and (max-width: 800px) {
    flex-flow: column;
  }
`;

const FlexParentNoCol = styled.div`
    display: flex;
`;

export {FlexParent, FlexParentNoCol};