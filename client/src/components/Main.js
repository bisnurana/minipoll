import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMails from './AllMails';
import Landing from './Landing';
import MailNew from './MailNew';
import MailReports from './MailReports';
import MailDrafts from './MailDrafts';
import SingleReport from "./SingleReport";
import NotFound from './NotFound';


const Main = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/mails" component={AllMails} />
      <Route exact path="/mails/drafts" component={MailDrafts} />
      <Route exact path="/mails/reports" component={MailReports} />
      <Route path="/mails/reports/:id" component={SingleReport} />
      <Route path="/mails/create" component={MailNew} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default Main;
