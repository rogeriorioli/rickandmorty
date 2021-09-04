import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Character from '../pages/Character';
import Home from '../pages/Home';

const Routes = () => {
  return(
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/character/:id" component={Character} />
        </Switch>
      </BrowserRouter>
  );
}

export default Routes;