import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    background-color: #424242;
`;

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span>Made by @kiano</span>
            </FooterContainer>
        );
    }
}

export { Footer };