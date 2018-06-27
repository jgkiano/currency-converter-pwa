import {
    CURRENCIES_FOUND
} from '../types';

const INITIAL_STATE = {
    loading: true,
    currencies: [],
    exchangeRates: [],
    from: null,
    to: null,
    exchangeAvailable: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENCIES_FOUND:
            const from = action.payload.filter( curr => curr.id === "USD" )[0];
            const to = action.payload.filter( curr => curr.id === "KES" )[0];
            return { ...state, currencies: action.payload, from, to, loading: false };
        default:
            return state;
    }
}