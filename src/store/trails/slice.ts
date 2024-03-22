/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Enum_Trails_Modality, Scalars } from '@/graphql/generated/graphql';

export type TrailRoute = {
  id: string;
  finishedAt?: Scalars['DateTime'];
  startedAt?: Scalars['DateTime'];
  routeId: string;
};

export type Trail = {
  finishedAt?: Scalars['DateTime'];
  id: string;
  inversePaths: boolean;
  modality: Enum_Trails_Modality;
  startedAt: Scalars['DateTime'];
  routes: TrailRoute[];
  certificate?: {
    file: string;
  };
};

export interface TrailsState {
  trails: Trail[];
}

const initialState: TrailsState = {
  trails: [],
};

export const trailsSlice = createSlice({
  name: 'trails',
  initialState,
  reducers: {
    setTrails: (state, action: PayloadAction<Trail[]>) => {
      state.trails = action.payload;
    },
  },
});

export const { setTrails } = trailsSlice.actions;

export default trailsSlice.reducer;
