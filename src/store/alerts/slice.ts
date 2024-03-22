import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Alert } from '@/types';

export interface AlertsState {
  alerts: Alert[];
}

const initialState: AlertsState = {
  alerts: [],
};

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<Alert>) => {
      state.alerts.push(action.payload);
    },
    removeAlert: (state, action: PayloadAction<{ index: number }>) => {
      state.alerts.splice(action.payload.index, 1);
    },
  },
});

export const { addAlert, removeAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
