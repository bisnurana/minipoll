import React from 'react';
import { Route } from 'react-router-dom';
import AllMails from './AllMails';
import Landing from './Landing';
import MailNew from './MailNew';
import MailReports from './MailReports';
import MailDrafts from './MailDrafts';


const Main = () => (
  <div className="container">
    <Route exact path="/" component={Landing} />
    <Route exact path="/mails" component={AllMails} />
    <Route exact path="/mails/drafts" component={MailDrafts} />
    <Route path="/mails/reports" component={MailReports} />
    <Route path="/mails/create" component={MailNew} />
  </div>
);

export default Main;
