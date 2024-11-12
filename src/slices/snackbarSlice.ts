import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface ISnackbarItem {
    message: string,
    id: number
}

interface ISnackBarState {
    id: number,
    snackBar: ISnackbarItem[]
}

const initialState: ISnackBarState = {
    id: 0,
    snackBar: []
}

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        addToQueue: (state, action: PayloadAction<ISnackbarItem>) => {
            state.snackBar.push(action.payload);
            state.id++;
        },
        removeItem: (state, action: PayloadAction<ISnackbarItem>) => {
            state.snackBar = state.snackBar.filter((item) => { return item.id !== action.payload.id });
        }
    },
})

export default snackbarSlice.reducer
export const { addToQueue, removeItem } = snackbarSlice.actions