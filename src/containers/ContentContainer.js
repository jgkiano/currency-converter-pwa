import React, { Component } from 'react';
import styled from 'styled-components';
import { Converter } from './';

class ContentContainer extends Component {
    render() {
        return (
            <Container>
                <Converter />
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
    flex: 1;
    overflow: scroll;
`;

export { ContentContainer };