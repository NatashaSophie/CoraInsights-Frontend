import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const routesBaseSelector = (state: RootState) => state.routes;

export const routesSelector = createDraftSafeSelector(
  routesBaseSelector,
  (state) => state.routes
);
