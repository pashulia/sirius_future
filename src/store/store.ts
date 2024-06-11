import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        // your reducers
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
