import axios from 'axios';
import _ from 'lodash';
import { db } from "../../services";
import {
    CURRENCIES_FOUND,
    CURRENCY_SELECTED,
    AMOUNT_CHANGED,
    XCHANGE_FOUND,
    LOADING_START,
    CLOSE_SNACK,
    OPEN_SNACK
} from '../types';

export const fetchCurrencies = () => async dispatch => {
    try {
        const { data } = await axios.get('https://freecurrencyconverterapi.com/api/v5/currencies');
        const { results } = data;
        dispatch({ type: CURRENCIES_FOUND, payload: _.values(results) });
        _storeInDB(_.values(results));
    } catch (error) {
        const res = await _fetchFromDB();
        if(res && res.length) return dispatch({ type: CURRENCIES_FOUND, payload: res });
        console.log(error);
        return dispatch({ type: OPEN_SNACK, payload: 'Could not connect to the internet. Please check your connection.' });
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
        _storeXchange(payload);
    } catch (error) {
        const query = `${from.id}_${to.id}`;
        const res = await _fetchXchangeFromDB(query);
        if(res) return dispatch({ type: XCHANGE_FOUND, payload: res });
        console.log(error);
        return dispatch({ type: OPEN_SNACK, payload: 'Could not connect to the internet. Please check your connection.' });
    }
}

export const closeSnack = () => ({ type: CLOSE_SNACK });

const _storeInDB = async (currencies) => {
    for ( const currency of  currencies ) {
        if ( (await db.currencies.where({ id: currency.id }).count()) === 0 ) {
            await db.currencies.add({ ...currency });
        }
    }
}

const _fetchFromDB = async () => (await db.currencies.toArray());

const _storeXchange = async xchange => {
    const { query } = xchange;
    let storedRate = await db.exchangeRates.where({ query });
    if ( (await storedRate.count()) === 0 ) {
        await db.exchangeRates.add({ ...xchange });
    } else {
        storedRate.modify({ ...xchange });
    }
}

const _fetchXchangeFromDB = async query => {
    const storedRate = await db.exchangeRates.where({ query }).toArray();
    return storedRate[0];
}