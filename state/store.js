import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../state/index'

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
