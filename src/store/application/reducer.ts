import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IReduxApplication {
  isMobileScreen: boolean;
}

export const applicationInit: IReduxApplication = {
  isMobileScreen: false,
};

const applicationReducer = createSlice({
  name: 'application',
  initialState: applicationInit,
  reducers: {
    setIsMobileScreen: (state, action: PayloadAction<boolean>) => {
      state.isMobileScreen = action.payload;
    },
  },
});

const { reducer, actions } = applicationReducer;
export const applicationActions = actions;
export default reducer;
