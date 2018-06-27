const INITIAL_STATE = {
    loading: false,
    currencies: [],
    exchangeRates: [],
    from: null,
    to: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}