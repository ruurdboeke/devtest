import React     from 'react';
import { Route } from 'react-router';

import App from './components/mainServerSideEntry.tsx';
import Home from './components/Home.tsx';

export default (
  <Route name="app" component={App} path="/">
    <Route component={Home} path="home" />
  </Route>
);
