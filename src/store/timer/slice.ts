/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TimerState {
  timeRequest: string
}

const initialState: TimerState = {
  timeRequest: new Date().toISOString()
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
		setTimer: (state, action: PayloadAction<string>) => {
			state.timeRequest = action.payload;
		},
    resetTimer: () => initialState,
  },
});

export const { setTimer } = timerSlice.actions;

export default timerSlice.reducer;
