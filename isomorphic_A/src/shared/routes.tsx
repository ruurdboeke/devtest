var React = require('react');
var Route = require('react-router').Route

import App from './components/mainServerSideEntry';
var Home = require('./components/Home').default;

export default (
  <Route name="app" component={App} path="/">
    <Route component={Home} path="home" />
  </Route>
);
