import {
    CURRENCIES_FOUND,
    CURRENCY_SELECTED,
    AMOUNT_CHANGED,
    XCHANGE_FOUND,
    LOADING_START,
    LOADING_END
} from '../types';

const INITIAL_STATE = {
    loading: true,
    currencies: [],
    exchangeRates: {},
    from: null,
    to: null,
    exchangeAvailable: false,
    total: 0.00,
    amount: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENCIES_FOUND:
            const from = action.payload.filter( curr => curr.id === "USD" )[0];
            const to = action.payload.filter( curr => curr.id === "KES" )[0];
            return { ...state, currencies: action.payload, from, to, loading: false };
        case CURRENCY_SELECTED:
            let qu = '';
            if(action.payload.type === 'to') {
                qu = `${state.from.id}_${action.payload.currency.id}`;
            } else {
                qu = `${action.payload.currency.id}_${state.to.id}`;
            }
            const ra = state.exchangeRates[qu];
            if(!ra) return { ...state, [action.payload.type]: action.payload.currency, exchangeAvailable: false };
            return {
                ...state,
                [action.payload.type]: action.payload.currency,
                exchangeAvailable: true,
                total: (state.amount * ra).toFixed(2)
            };
        case AMOUNT_CHANGED:
            const q = `${state.from.id}_${state.to.id}`;
            const r = state.exchangeRates[q];
            if(!r) return { ...state, amount: action.payload };
            return { ...state, amount: action.payload, total: (action.payload * r).toFixed(2) };
        case XCHANGE_FOUND:
            const { query, rate } = action.payload;
            const total = (state.amount * rate).toFixed(2);
            return { 
                ...state, 
                exchangeRates: { ...state.exchangeRates, [query]:rate }, 
                total, 
                exchangeAvailable: true, 
                loading: false 
            };
        case LOADING_START:
            return { ...state, loading: true };
        case LOADING_END:
            return { ...state, loading: false };
        default:
            return state;
    }
}