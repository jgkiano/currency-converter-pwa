import Dexie from 'dexie';
const db = new Dexie("X-change-db");
db.version(1).stores({ 
    currencies: "id, currencyName, currencySymbol",
    exchangeRates: "query, rate "
});

export { db };