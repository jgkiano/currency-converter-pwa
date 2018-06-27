import axios from 'axios';
import _ from 'lodash';
import {
    CURRENCIES_FOUND
} from '../types';

export const fetchCurrencies = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://free.currencyconverterapi.com/api/v5/currencies');
        const { results } = data;
        dispatch({ type: CURRENCIES_FOUND, payload: _.values(results) });
    } catch (error) {
        console.log(error)
    }
}