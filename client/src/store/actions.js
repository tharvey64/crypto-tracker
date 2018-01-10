import * as types from '@/store/mutation-types';
import { CoinMarketCapAPI } from '@/api/coinmarketcap';

const coinMarketCapApi = new CoinMarketCapAPI();

export const loadCoins = ( { commit, state }, options ) => {
    // TODO: How to handle requests to load results with `limit` and/or `start`?
    return new Promise( ( resolve, reject ) => {
        var lastUpdated = state.coins.last_updated;
        if ( !Object.keys( state.coins.items ).length || !lastUpdated || lastUpdated + 300000 <= +( new Date() ) ) {
            coinMarketCapApi.getTickers( options || {} ).catch( reject ).then( ( { data } ) => {
                var items = {};
                data.forEach( ( element, index, collection ) => {
                    items[ element.rank ] = element;
                } );
                commit( types.LOAD_COINS, items );
                resolve();
            } );
        } else {
            resolve();
        }
    } );
};
