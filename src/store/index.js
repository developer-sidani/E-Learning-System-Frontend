import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import { profileReducer, cartReducer } from '../slices'

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: hardSet,
	version: 1,
	debug: true,
}
const reducer = combineReducers({
	cart: cartReducer,
	profile: profileReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer)
export default () => {
	const store = createStore(persistedReducer)
	const persistor = persistStore(store)
	return { store, persistor }
}
