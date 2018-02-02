import React from 'react';
import { Route } from 'react-router-dom';
import AllMails from './AllMails';
import Landing from './Landing';
import MailNew from './MailNew';
import MailReports from './MailReports';


const Main = () => (
  <div className="container">
    <Route exact path="/" component={Landing} />
    <Route exact path="/mails" component={AllMails} />
    <Route path="/mails/reports" component={MailReports} />
    <Route path="/mail/create" component={MailNew} />

  </div>
);

export default Main;
