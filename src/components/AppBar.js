import React, { Component } from 'react';
import styled from 'styled-components';
import * as Components from '@material-ui/core';
import { Info } from '@material-ui/icons'
import { Modal } from './';

const MODAL_TITLE   = 'Hey There 👋';
const MODAL_CONTENT = 'Hope you\'re enjoying this simple app. Its specifically made for the ALC #7DaysofCodeChallenge and uses some cool tech to make it fast and offline first. You can read more about it on the official GitHub repo, or you can just say hi!';
const BUTTON_LEFT   = 'READ MORE';
const BUTTON_RIGHT  = 'SAY HI';

const Bar = Components.AppBar;
const { 
    Toolbar, 
    Typography, 
    IconButton
} = Components;

class AppBar extends Component {

    state = {
        showModal: false
    }

    render() {
        return (
            <Bar position="static">
                {this._renderModal()}
                <Toolbar>
                    <TitleContainer>
                        <Typography variant="title" color="inherit">
                            X-change
                        </Typography>
                    </TitleContainer>
                    <IconButton onClick={() => this.setState({ showModal: !this.state.showModal }) }>
                        <StyledIcon />
                    </IconButton>
                </Toolbar>
            </Bar>
        );
    }

    _renderModal = () => {
        if(this.state.showModal) {
            return (
                <Modal 
                    show={true}
                    title={MODAL_TITLE} 
                    content={MODAL_CONTENT} 
                    leftButtonText={BUTTON_LEFT}
                    leftButtonOnClick={() => this._handleModalClick('left')}
                    rightButtonText={BUTTON_RIGHT}
                    rightButtonOnClick={() => this._handleModalClick('right')}
                    onCloseRequest={() => this.setState({ showModal: !this.state.showModal }) }
                />
            );
        }
        return null;
    }

    _handleModalClick = (type) => {
        this.setState({ showModal: false}, () => {
            if(type === 'left') return  window.open('https://github.com/julezKiano','_blank');
            return  window.open('mailto:jgkiano@gmail.com.com?Subject=Hey Kiano');
        });
    }

}

const StyledIcon = styled(Info)`
    color: #F5F5F5;
`;

const TitleContainer = styled.div`
    flex: 1;
`;


export { AppBar };