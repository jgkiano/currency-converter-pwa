import React, { Component } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledTextField = styled(TextField)`
    flex: 1;
    text-align: right;
`;

class Input extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <StyledTextField
                label="Amount"
                value={value}
                onChange={ event => onChange(event.target.value)}
                type="number"
                placeholder="0.00"
                disabled={this.props.disabled}
            />
        );
    }
}

export { Input };