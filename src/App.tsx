import React from 'react';
import './App.css';
import AppRouter from './screens/router';
import { rootReducer, initialState } from './state/reducers';

const GlobalStore = React.createContext({});

const Provider = ({ children }: { children: JSX.Element }) => {
  const [ state, dispatch ] = React.useReducer(rootReducer, initialState);
  return (
    <GlobalStore.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStore.Provider>
  )
}

function App() {
  return (
    <Provider>
      <AppRouter />
    </Provider>
  );
}

export default App;
