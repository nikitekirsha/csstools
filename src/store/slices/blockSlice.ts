import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CSSProperties } from 'react';

export interface blockState {
	blockStyles: CSSProperties;
	fallback: string;
}

const initialState: blockState = {
	blockStyles: {},
	fallback: '',
};

export const blockSlice = createSlice({
	name: 'block',
	initialState,
	reducers: {
		setStyle(state: blockState, { payload }: PayloadAction<CSSProperties>) {
			state.blockStyles = payload;
		},
		resetStyle(state: blockState) {
			state.blockStyles = {};
		},
		setFallback(state: blockState, { payload }: PayloadAction<string>) {
			state.fallback = payload;
		},
		resetFallback(state: blockState) {
			state.fallback = '';
		},
	},
});

export const { resetStyle, setStyle, setFallback, resetFallback } =
	blockSlice.actions;
export default blockSlice.reducer;
