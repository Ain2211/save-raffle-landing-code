import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IReduxUser {
  user: any; // TODO: add type
}

export const userInit: IReduxUser = {
  user: null,
};

const userReducer = createSlice({
  name: 'user',
  initialState: userInit,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = userReducer;
export const userActions = actions;
export default reducer;
