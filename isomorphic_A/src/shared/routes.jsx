import React     from 'react';
import { Route } from 'react-router';

import App from './components/mainServerSideEntry.tsx';

export default (
  <Route name="app" component={App} path="/"></Route>
);
