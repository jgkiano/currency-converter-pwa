import {
    CURRENCIES_FOUND,
    CURRENCY_SELECTED,
    AMOUNT_CHANGED
} from '../types';

const INITIAL_STATE = {
    loading: true,
    currencies: [],
    exchangeRates: [],
    from: null,
    to: null,
    exchangeAvailable: false,
    total: 0.00,
    amount: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENCIES_FOUND:
            const from = action.payload.filter( curr => curr.id === "USD" )[0];
            const to = action.payload.filter( curr => curr.id === "KES" )[0];
            return { ...state, currencies: action.payload, from, to, loading: false };
        case CURRENCY_SELECTED:
            return { ...state, [action.payload.type]: action.payload.currency };
        case AMOUNT_CHANGED:
            return { ...state, amount: action.payload };
        default:
            return state;
    }
}