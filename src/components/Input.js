import React, { Component } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledTextField = styled(TextField)`
    flex: 1;
    text-align: right;
`;

class Input extends Component {
    render() {
        return (
            <StyledTextField
                label="Amount"
                // value={9000}
                // onChange={ number => console.log(number)}
                type="number"
                placeholder="0.00"
                disabled={this.props.disabled}
            />
        );
    }
}

export { Input };