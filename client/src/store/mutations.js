import * as types from '@/store/mutations-types';

export default { 
	[ types.ADD_COINS ] ( state, coins ) {
		state.coins = coins;
	}
};