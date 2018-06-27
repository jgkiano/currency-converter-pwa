import axios from 'axios';
import _ from 'lodash';
import {
    CURRENCIES_FOUND,
    CURRENCY_SELECTED,
    AMOUNT_CHANGED,
    XCHANGE_FOUND,
    LOADING_START
} from '../types';

export const fetchCurrencies = () => async dispatch => {
    try {
        const { data } = await axios.get('https://free.currencyconverterapi.com/api/v5/currencies');
        const { results } = data;
        dispatch({ type: CURRENCIES_FOUND, payload: _.values(results) });
    } catch (error) {
        console.log(error)
    }
}

export const currencySelected = (currency, type) => ({ type: CURRENCY_SELECTED, payload: { currency, type  } });

export const onAmountChange = payload => ({ type: AMOUNT_CHANGED, payload });

export const xChange = ({ to, from, amount }) => async dispatch => {
    try {
        dispatch({ type: LOADING_START });
        const query = `${from.id}_${to.id}`;
        const link = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=y`;
        const { data } = await axios.get(link);
        if(!data || !data[query]) throw new Error(`Something went wrong with api response => ${data}`);
        const payload = { query, rate: data[query].val };
        dispatch({ type: XCHANGE_FOUND, payload });
    } catch (error) {
        console.log(error)
    }
}