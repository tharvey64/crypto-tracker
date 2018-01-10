import * as types from '@/store/mutation-types';
import { CoinMarketCapAPI } from '@/api/coinmarketcap';

const coinMarketCapApi = new CoinMarketCapAPI();

var updateCoins = ( { state, commit, dispatch } ) => {
    // wait until it has been 5 min after lastUpdated.
    commit( types.IS_WAITING_TO_LOAD_COINS, true );
    setTimeout( () => {
        commit( types.IS_WAITING_TO_LOAD_COINS, false );
        dispatch( 'loadCoins' );
    }, ( state.coins.lastUpdated + 300000 ) - ( +( new Date() ) ) );
};

export const loadCoins = ( context, options ) => {
    // TODO: How to handle requests to load results with `limit` and/or `start`?
    return new Promise( ( resolve, reject ) => {
        var lastUpdated = context.state.coins.lastUpdated;
        var hasCoins = !!Object.keys( context.state.coins.items ).length;
        if ( !hasCoins || !lastUpdated || lastUpdated + 300000 <= +( new Date() ) ) {
            coinMarketCapApi.getTickers( options || {} ).catch( reject ).then( ( { data } ) => {
                var items = {};
                data.forEach( ( element, index, collection ) => {
                    items[ element.rank ] = element;
                } );
                context.commit( types.LOAD_COINS, items );
                resolve();
                if ( !context.state.isWaiting ) updateCoins( context );
            } );
        } else {
            resolve();
            if ( !context.state.isWaiting ) updateCoins( context );
        }
    } );
};
