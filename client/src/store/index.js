'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from '@/store/actions';
import mutations from '@/store/mutations';
import * as getters from '@/store/getters';
import { getItem } from '@/store/utils';

Vue.use( Vuex );

const debug = process.env.NODE_ENV !== 'production';

var storedState = JSON.parse( getItem( '__cointracker__' ) || '{}' );

export default new Vuex.Store( {
	'state': storedState || { 'coins': { 'last_updated': null, 'items': {} } };,
	actions,
	mutations,
	getters,
	'strict': debug
} );