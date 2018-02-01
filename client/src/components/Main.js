import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMails from './AllMails';
import Landing from './Landing';
import MailNew from './MailNew';


const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/mails" component={AllMails} />
      <Route path="/mails/new" component={MailNew} />
    </Switch>
  </div>

);

export default Main;
