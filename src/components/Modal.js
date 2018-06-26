import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide } from '@material-ui/core';

class Modal extends Component {
    render() {
        return (
            <Dialog
                open={this.props.show ? this.props.show : false }
                TransitionComponent={ props => this._getDialogTransition(props)}
                onClose={this.props.onCloseRequest}
            >
                <DialogTitle>
                    {this.props.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {this.props.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {
                        this.props.leftButtonText && this.props.leftButtonOnClick ?
                        <Button onClick={this.props.leftButtonOnClick} color="primary">
                            {this.props.leftButtonText}
                        </Button>
                        :
                        null
                    }
                    {
                        this.props.rightButtonText && this.props.rightButtonOnClick ?
                        <Button onClick={this.props.rightButtonOnClick} color="primary">
                            {this.props.rightButtonText}
                        </Button>
                        :
                        null
                    }
                </DialogActions>
            </Dialog>
        );
    }

    _getDialogTransition = (props) => <Slide direction="up" {...props} />;

}

export { Modal };