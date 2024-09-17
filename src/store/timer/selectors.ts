import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const timerBaseSelector = (state: RootState) => state.timer;

export const timerSelector = createDraftSafeSelector(
  timerBaseSelector,
  (state) => state.timeRequest
);
