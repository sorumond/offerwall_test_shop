import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IStoreItem } from '../components/pages/Shop/shopItem'


export interface ICartItem {
    info: IStoreItem,
    count: number
}

export interface ICart {
    [key: string]: ICartItem
}

interface CartState {
    cart: ICart
}

const initialState: CartState = {
    cart: JSON.parse(window.localStorage.getItem('cart') as string) || []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            state.cart[action.payload.info.id] = action.payload;
            window.localStorage.setItem('cart', JSON.stringify({ ...state.cart }));
        },
        removeFromCart: (state, action: PayloadAction<ICartItem>) => {
            delete state.cart[action.payload.info.id]
            window.localStorage.setItem('cart', JSON.stringify({ ...state.cart }));
        },
        removeAllFromCart: (state) => {
            state.cart = {};
            window.localStorage.setItem('cart', JSON.stringify({ ...state.cart }));
        }
    },
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, removeAllFromCart } = cartSlice.actions