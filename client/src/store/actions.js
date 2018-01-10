import * as types from '@/store/mutations-types';

import { CoinMarketCapAPI } from './api/coinmarketcap';

const coinMarketCapApi = new CoinMarketCapAPI();

export const getCoins = ( { commit, state }, options ) => {
	// TODO: How to handle requests to load results with `limit` and/or `start`?
	var last_updated = state.coins.last_updated;
	if ( !state.coins.items || !last_updated || last_updated + 300000 >= +( new Date() ) ){		
		coinMarketCapApi.getTickers( options ).then( ( { data }) => {
			// convert array to object
			// easy with lodash
			commit( types.ADD_COINS, data );
		} );
	}
};