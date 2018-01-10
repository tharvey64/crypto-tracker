import * as types from '@/store/mutations-types';

import { CoinMarketCapAPI } from './api/coinmarketcap';

const coinMarketCapApi = new CoinMarketCapAPI();

export const getCoins = ( { commit, state }, options ) => {
	// TODO: Add logic to determine if the coins need to be loaded
	// 		- if the data has expired
	// 		- if there are no coins
	// TODO: How to handle requests to load results with `limit` and/or `start`?
	
	if ( !state.coins ){		
		coinMarketCapApi.getTickers( options ).then( ( { data }) => {
			commit( types.ADD_COINS, data );
		} );
	}
};