import React       from 'react';
import { render }  from 'react-dom';
import { Route }  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from '../shared/routes';

const history = createBrowserHistory();
render(
  <Route children={routes} history={history} />,
  document.getElementById('react-view')
);
