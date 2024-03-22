import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const trailsBaseSelector = (state: RootState) => state.trails;

export const trailsSelector = createDraftSafeSelector(
  trailsBaseSelector,
  (state) => state.trails
);

export const hasSomeTrailSelector = createDraftSafeSelector(
  trailsBaseSelector,
  (state) => state.trails.length > 0
);

export const trailSelector = createDraftSafeSelector(
  trailsSelector,
  (trails) => trails[0]
);

export const trailRoutesSelector = createDraftSafeSelector(
  trailSelector,
  (trail) => trail?.routes
);

export const trailIsInverseSelector = createDraftSafeSelector(
  trailSelector,
  (trail) => trail?.inversePaths
);

export const unfinishedTrailRouteSelector = createDraftSafeSelector(
  trailRoutesSelector,
  (trailRoutes) => trailRoutes?.find((trailRoute) => !trailRoute.finishedAt)
);
