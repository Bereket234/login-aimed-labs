import React from 'react';
import styled from 'styled-components';

const LeftSideContainer = styled.div`
  flex: 4;
`;


const ImageContainer = styled.div`
  width: 400;
  height: 400;
  max-width: 100px;
  padding: 100px;
`;

function LeftSide(props) {
    return (
        <LeftSideContainer>
            <ImageContainer>
                <img src="login.svg" width={450} />
            </ImageContainer>
        </LeftSideContainer>
    );
}

export default LeftSide;