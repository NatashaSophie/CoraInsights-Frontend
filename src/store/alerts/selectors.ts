import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const alertsBaseSelector = (state: RootState) => state.alerts;

export const alertsSelector = createDraftSafeSelector(
  alertsBaseSelector,
  (state) => state.alerts
);
