import React, { Component } from 'react';
import { Snackbar, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

class Snack extends Component {
    render() {
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={this.props.show}
                autoHideDuration={6000}
                onClose={this.props.onCloseRequest}
                message={<span>Could not connect to the internet. Please check your connection.</span>}
                action={[
                    <Button key="okay" color="secondary" size="small" onClick={this.handleClose}>
                        Okay
                    </Button>,
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={this.props.onCloseRequest}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        );
    }
}

export { Snack };
