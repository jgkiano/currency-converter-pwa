import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Converter } from './';
import { fetchCurrencies } from './actions';

class ContentContainer_ extends Component {

    componentWillMount() {
        const { currencies, fetchCurrencies } = this.props;
        if(!currencies.length) return fetchCurrencies();
    }

    render() {
        return (
            <Container>
                <Converter />
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
    flex: 1;
    overflow: scroll;
`;

function mapStateToProps({ currency }) {
    return { ...currency };
}

const actions = { fetchCurrencies };
const ContentContainer = connect(mapStateToProps, actions)(ContentContainer_);
export { ContentContainer };