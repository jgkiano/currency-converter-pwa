import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    background-color: #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #616161;
    height: 50px;
`;

const Link = styled.a`
    display: inline-block;
    margin-left: 5px;
    text-decoration: none;
    color: #616161;
    &:hover {
        color: #212121;
    }
`;

const FOOTERTEXT = '</> by';

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span>{FOOTERTEXT}</span>
                <Link target="_blank" href="https://github.com/julezKiano">@kiano</Link>
            </FooterContainer>
        );
    }
}

export { Footer };