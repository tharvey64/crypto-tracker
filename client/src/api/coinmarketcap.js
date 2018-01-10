'use strict';

import ajax from 'utils';


// DOCS: https://coinmarketcap.com/api/


// Limits:
// Please limit requests to no more than 10 per minute.
// Endpoints update every 5 minutes.


var CoinMarketCapAPI = class extends ajax {
	constructor() {
		this.base = 'https://api.coinmarketcap.com/v1'
	};

	getTickers( options ) {
		/* Optional parameters:
		 * (int) `start` - return results from rank [start] and above
		 * (int) `limit` - return a maximum of [limit] results (default is 100, use 0 to return all results)
		 * (string) `convert` - return price, 24h volume, and market cap in terms of another currency. 
		 * 	 Valid values are: 
		 *   	"AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", 
		 *   	"DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", 
		 *   	"INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", 
		 *   	"PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", 
		 *   	"TRY", "TWD", "ZAR"
		 */
		return this.get( `${this.base}/ticker/`, options || {} );
	};

	getTicker( options ) {
		/* Optional parameters:
		 * (string) `convert` - return price, 24h volume, and market cap in terms of another currency. 
		 * 	Valid values are: 
		 *  	"AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", 
		 *  	"HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", 
		 *  	"NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"
		 */
		return this.get( `${this.base}/ticker/${options.id}/`, options || {} );
	};

	getGlobal( options ) {
		/* Optional parameters:
		 * (string) `convert` - return 24h volume, and market cap in terms of another currency. 
		 *  Valid values are: 
		 *		"AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", 
		 *		"GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", 
		 *		"MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", 
		 *		"THB", "TRY", "TWD", "ZAR"
		 */
		return this.get( `${this.base}/global/`,  options || {} );
	};
};