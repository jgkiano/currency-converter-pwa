import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    flex: 1;
    overflow: scroll;
`;

class ContentContainer extends Component {
    render() {
        return (
            <Container>
            </Container>
        );
    }
}

export { ContentContainer };