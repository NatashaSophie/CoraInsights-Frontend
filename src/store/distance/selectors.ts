import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const distanceBaseSelector = (state: RootState) => state.distance;

export const distanceSelector = createDraftSafeSelector(
  distanceBaseSelector,
  (state) => state.calculated
);

export const paramsSelector = createDraftSafeSelector(
  distanceBaseSelector,
  (state) => state.params
);