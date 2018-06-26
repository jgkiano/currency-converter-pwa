import React, { Component } from 'react';
import styled from 'styled-components';

class Layout extends Component {
    render() {
        return (
            <Container>
                { this.props.children }
            </Container>
        );
        
    }
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
`;

export { Layout };