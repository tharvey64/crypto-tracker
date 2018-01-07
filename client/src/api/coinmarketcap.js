import ajax from 'utils';


// https://coinmarketcap.com/api/
// Limits:
// Please limit requests to no more than 10 per minute.
// Endpoints update every 5 minutes.


var CoinMarketCapAPI = function(){
	var api = {
		"base": "https://api.coinmarketcap.com/v1/"
	};
	return api;
};

CoinMarketCapAPI.prototype.getTickers = function(options){

};


CoinMarketCapAPI.prototype.getTicker = function(options){

};

CoinMarketCapAPI.prototype.getGlobal = function(options){

};