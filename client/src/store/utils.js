export const getItem = ( key ) => {

    return localStorage.getItem( key );

};

export const setItem = ( key, item ) => {

    return localStorage.setItem( key, item );

};

export const getState = () => {

    var state = JSON.parse( getItem( '__cointracker__' ) || '{ "coins": { "lastUpdated": null, "items": {} } }' );
    state.coins.isWaiting = false;
    return state;

};

export const setState = ( state ) => {

    return setItem( '__cointracker__', JSON.stringify( state ) );

};
