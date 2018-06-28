import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Converter } from './';
import { fetchCurrencies, closeSnack } from './actions';
import { Snack } from '../components';

class ContentContainer_ extends Component {

    componentWillMount() {
        const { currencies, fetchCurrencies } = this.props;
        if(!currencies.length) return fetchCurrencies();
    }

    render() {
        const { snack, closeSnack } = this.props;
        return (
            <Container>
                <Snack show={snack} message={snack} onCloseRequest={closeSnack} />
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

const actions = { fetchCurrencies, closeSnack };
const ContentContainer = connect(mapStateToProps, actions)(ContentContainer_);
export { ContentContainer };