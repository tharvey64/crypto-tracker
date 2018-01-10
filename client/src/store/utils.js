export const getItem = ( key ) => {
	return localStorage.getItem( key );
};

export const setItem = ( key, item ) => {
	return localStorage.setItem( key, item );
};