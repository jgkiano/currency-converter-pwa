# X-change

PWA offline first, currency convereter.

## How it works

Go to [http://julezkiano.github.io/](http://julezkiano.github.io/). Assets and currencies are stored locally on your browser.

After clicking the convert button the exchange rate is stored locally (IndexDB) and is used as a fallback when ever there isn't an internet connection. When an exhange rate has been obtained you can continue typing values and the app will automatically calculate the amount on the fly. It uses redux to persist exchange rates on the currect browser session so you don't have to make subsequent network calls if you've fetched the exchange rate before.

## Testing

* Go to [http://julezkiano.github.io/](http://julezkiano.github.io/)
* Convert a currency of your choice e.g USD to KSh
* Enter a new amount (App will calculate new value on the fly)
* Convert another currency e.g USD to Liberian Dollar
* After you've completed the second converstion, perform the initial converstion you did in step 2 e.g USD to KSh (You should not see a convert button)
* Go offline and refresh the page. Try performing the two converstions you did in the previous steps.