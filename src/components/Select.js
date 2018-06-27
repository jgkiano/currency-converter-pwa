import React, { Component } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

class Select extends Component {

    render() {
        console.log(this.props.default);
        return (
            <StyledTextField
                label={this.props.label}
                select
                value={this.props.default && this.props.default ? this.props.default.id : ''}
                onChange={this._handleChange}
                SelectProps={{native: true}}
                disabled={this.props.disabled}
            >
                {this._renderOptions()}
            </StyledTextField>
        );
    }
    _renderOptions = () => {
        if(!this.props.options || !this.props.options.length) return <option />;
        return this.props.options.map( option => {
            return (
                <option key={option.id} value={option.id}>
                    {`${option.currencyName} (${option.currencySymbol})`}
                </option>
            );
        });
    }
    _handleChange = (event) => {
        console.log(event.target.value);
    }
}

const StyledTextField = styled(TextField)`
    flex: 1
`;

export { Select };