import React, { Component } from 'react';
import styled from 'styled-components';
import { Select, Input } from '../components';
import { Button, LinearProgress } from '@material-ui/core';

const currencies = [
    {
      value: 'USD',
      label: 'USD',
    },
    {
      value: 'EUR',
      label: 'EUR',
    },
    {
      value: 'BTC',
      label: 'BTC',
    },
    {
      value: 'JPY',
      label: 'JPY',
    },
];

class Converter extends Component {
    render() {
        return (
            <div>
            <ConverterContainer>
                <SelectContainer>
                    <Select 
                        label="From" 
                        options={currencies} 
                        default={currencies[0].value}
                    />
                    <Separator />
                    <Select 
                        label="To" 
                        options={currencies} 
                        default={currencies[1].value}
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
        return (
            <Button variant="contained" color="primary">
                Convert
            </Button>
        );
        // return (
        //     <div>
        //         <NumberText>
        //             7566.00
        //         </NumberText>
        //         <CurrencyText>
        //             KES
        //         </CurrencyText>
        //     </div>
        // );
    }

    _renderLoader = () => {
        return null;
        return (
            <LinearProgress />
        );
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

const Container = styled.div`
    width: 100%;
    flex: 1;
    overflow: scroll;
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export { Converter };