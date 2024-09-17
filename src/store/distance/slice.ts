/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { DistanceGeoApiFy, SearchParams } from '@/types';

export interface DistanceState {
  calculated: DistanceGeoApiFy;
	params: SearchParams;
}

const initialState: DistanceState = {
  calculated: {},
	params: {
		city: 1,
		modality: ''
	}
};

export const distanceSlice = createSlice({
  name: 'distance',
  initialState,
  reducers: {
		setDistance: (state, action: PayloadAction<DistanceGeoApiFy>) => {
			state.calculated = action.payload;
		},
		setParams: (state, action: PayloadAction<SearchParams>) => {
			state.params = action.payload;
		},
		setCity: (state, action: PayloadAction<number>) => {
			state.params.city = action.payload;
		},
		setModality: (state, action: PayloadAction<string>) => {
			state.params.modality = action.payload;
		},
    resetDistance: () => initialState,
  },
});

export const { setDistance, setParams, setCity, setModality, resetDistance } = distanceSlice.actions;

export default distanceSlice.reducer;
