import * as types from '@/store/mutations-types';
import { setItem } from '@/store/utils';

export default { 
	[ types.ADD_COINS ] ( state, coins ) {
		// coins should be an object
		// this would then be a merging of the two objects
		// state.coins = { ...state.coins, ...coins };
		state.coins = coins;
		setItem( '__cointracker__', JSON.stringify( state ) );
	}
};