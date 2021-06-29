import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../redux/reducers/index";
import thunk from "redux-thunk";
import AsyncStorage from "redux-persist/lib/storage";
import { persistReducer,persistStore } from "redux-persist";

//REDUX SETUP

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["user"]
};
const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];
const store = createStore(
    persistedReducer,
    {},
    compose(
        applyMiddleware(...middleware)
    )
);
 const perssistor=persistStore(store);

export { store,perssistor}