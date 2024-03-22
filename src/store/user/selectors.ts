import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const userBaseSelector = (state: RootState) => state.user;

export const userTokenSelector = createDraftSafeSelector(
  userBaseSelector,
  (state) => state.token
);

export const userSelector = createDraftSafeSelector(
  userBaseSelector,
  (state) => state.user
);

export const userIdSelector = createDraftSafeSelector(
  userBaseSelector,
  (state) => state.user?.id
);

export const userPositionSelector = createDraftSafeSelector(
  userBaseSelector,
  (state) => state.position
);
