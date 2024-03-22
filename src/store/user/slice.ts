/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Maybe } from '@/graphql/generated/graphql';
import { Location } from '@/types';

type User = {
  id?: string;
  name?: string;
  email?: string;
  birthdate?: string;
  sex?: string;
  avatar?: Maybe<{
    __typename?: 'UploadFile' | undefined;
    url: string;
  }>;
};

export interface UserState {
  user: User;
  token?: string;
  position?: Location;
}

const initialState: UserState = {
  token: undefined,
  user: {},
  position: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.user = {
        ...state.user,
        id: action.payload,
      };
    },
    setUserPosition: (
      state,
      action: PayloadAction<{ lat: number; lon: number }>
    ) => {
      state.position = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const { setToken, setUser, resetUser, setUserId, setUserPosition } =
  userSlice.actions;

export default userSlice.reducer;
