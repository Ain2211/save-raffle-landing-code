import { applicationActions } from './reducer';
import { store } from '@/store';

export const ReduxApplication = {
  setIsMobileScreen: (data: boolean) => store.dispatch(applicationActions.setIsMobileScreen(data)),
};
