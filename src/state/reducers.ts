import { state } from './state.model';
import { initialState as appStateInitialState } from './app/appState.reducer';

export function rootReducer(): state {
  return { 
    app: appStateInitialState
  };
}



export const initialState = { 
  app: appStateInitialState
};