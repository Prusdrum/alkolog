import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router";

import CurrentPartyScreen from './current-party-screen';
import HomeScreen from './home-screen';
import NewDrinkScreen from './new-drink-screen';

import { currentParty, newDrink, root } from './routes';

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Route path={root} exact component={HomeScreen}/>
        <Route path={newDrink} component={NewDrinkScreen}/>
        <Route path={currentParty} component={CurrentPartyScreen}/>
      </div>
    </Router>
  );
}

export default AppRouter;