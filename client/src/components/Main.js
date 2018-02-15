import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Landing from './Landing';
import MailNew from './MailNew';
import MailDrafts from './MailDrafts';
import SingleReport from "./SingleReport";
import NotFound from './NotFound';


const Main = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/mails/create" component={MailNew} />
      <Route exact path="/mails/drafts" component={MailDrafts} />
      <Route path="/mails/reports/:id" component={SingleReport} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default Main;
