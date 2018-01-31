import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Landing from './Landing';
import PollNew from './PollNew';


const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/polls" component={Dashboard} />
      <Route path="/polls/new" component={PollNew} />
    </Switch>
  </div>

);

export default Main;
