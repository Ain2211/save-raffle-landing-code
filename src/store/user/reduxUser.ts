import { userActions } from './reducer';
import { store } from '@/store';

export const ReduxUser = {
  setUser: (data: any) => store.dispatch(userActions.setUser(data)),
};
