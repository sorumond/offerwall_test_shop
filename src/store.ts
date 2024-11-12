import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import snackbarSlice from './slices/snackbarSlice';


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        snackbar: snackbarSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch