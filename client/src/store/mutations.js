import * as types from '@/store/mutation-types';
import { setItem } from '@/store/utils';

export default {
    [ types.LOAD_COINS ]: ( state, items ) => {
        state.coins = {
            ...state.coins,
            'last_updated': +( new Date() ),
            'items': { ...state.coins.items, ...items }
        };
        setItem( '__cointracker__', JSON.stringify( state ) );
    }
};
