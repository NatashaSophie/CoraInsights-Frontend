/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Image } from '@/types';

export type RouteDifficulty = 'easy' | 'extreme' | 'hard' | 'medium';

export type InterestPoint = {
  id: string;
  name: string;
  address?: string;
  email?: string;
  phone?: string;
  category: string;
  location: {
    x: number;
    y: number;
  };
};

export type Checkpoint = {
  id: string;
  name: string;
  location: {
    x: number;
    y: number;
  };
  interestPoints: InterestPoint[];
};

export type Route = {
  id: string;
  name: string;
  difficulty: string;
  time: string;
  distance: string;
  fromCheckpoint: Checkpoint;
  toCheckpoint: Checkpoint;
  description: string;
  slug: string;
  coverImage: Image;
  images: Image[];
};

export interface TrailsState {
  routes: Route[];
}

const initialState: TrailsState = {
  routes: [],
};

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoutes: (state, action: PayloadAction<Route[]>) => {
      state.routes = action.payload;
    },
  },
});

export const { setRoutes } = routesSlice.actions;

export default routesSlice.reducer;
