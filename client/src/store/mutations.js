import * as types from '@/store/mutation-types';
import { setState } from '@/store/utils';

export default {
    [ types.LOAD_COINS ]: ( state, items ) => {
        state.coins = {
            ...state.coins,
            'lastUpdated': +( new Date() ),
            'items': { ...state.coins.items, ...items }
        };
        setState( state );
    },
    [ types.IS_WAITING_TO_LOAD_COINS ]: ( state, isWaiting ) => {
        state.coins = { ...state.coins, isWaiting: !!isWaiting };
    }
};
