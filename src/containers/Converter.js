import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { currencySelected } from './actions';
import { Select, Input } from '../components';

class Converter_ extends Component {
    render() {
        const { loading, currencies, from, to } = this.props;
        return (
            <div>
            <ConverterContainer>
                <SelectContainer>
                    <Select 
                        label="From" 
                        options={currencies} 
                        value={from}
                        disabled={loading}
                        onChange={ event => this._handleOnSelectChange(event, 'from')}
                    />
                    <Separator />
                    <Select 
                        label="To" 
                        options={currencies} 
                        value={to}
                        disabled={loading}
                        onChange={ event => this._handleOnSelectChange(event, 'to')}
                    />
                </SelectContainer>
                <InputContainer>
                    <Input />   
                </InputContainer>
                <ResultContainer>
                    {this._renderResult()}
                </ResultContainer>
            </ConverterContainer>
            {this._renderLoader()}
            </div>
        );
    }

    _renderResult = () => {
        const { loading, exchangeAvailable, to, total } = this.props;
        if(!exchangeAvailable) {
            return (
                <Button variant="contained" color="primary" disabled={loading}>
                    Convert
                </Button>
            );
        }
        let surfix = to && to.id ? to.id : '';
        return (
            <div>
                <NumberText>
                    {total}
                </NumberText>
                <CurrencyText>
                    {surfix}
                </CurrencyText>
            </div>
        );
    }

    _renderLoader = () => {
        const { loading } = this.props;
        if (!loading) return null;
        return (
            <LinearProgress />
        );
    }

    _handleOnSelectChange = (event, type) => {
        let selected = event.target.value;
        const { currencies, currencySelected } = this.props;
        selected = currencies.filter( currency => currency.id === selected )[0];
        currencySelected(selected, type);
    }

}

const NumberText = styled.span`
    font-size: 32px;
    display: inline-block;
`;

const CurrencyText = styled.span`
    font-size: 15px;
    display: inline-block;
    margin-left: 5px;
    opacity: 0.5;
`;

const ResultContainer = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
`;

const ConverterContainer = styled.div`
    padding: 15px;
    background-color: white;
    padding-top: 30px;
    border-bottom: 1px solid #E0E0E0;
`;

const InputContainer = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
`; 

const Separator = styled.div`
    width: 10px;
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

function mapStateToProps({ currency }) {
    return { ...currency };
}

const actions = { currencySelected };
const Converter = connect(mapStateToProps, actions)(Converter_);
export { Converter };