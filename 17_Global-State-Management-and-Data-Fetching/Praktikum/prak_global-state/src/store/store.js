import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./todoSlice";

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore ({
    reducer: persistedReducer,
    middleware: (applyMiddleware) =>
        applyMiddleware()
})

const persistor = persistStore(store)
export {store, persistor}