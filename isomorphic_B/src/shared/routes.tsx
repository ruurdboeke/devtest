var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

import AppView from '../server/mainServerSideEntry';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';


export default (
  <Route name="app" component={AppView} path="/">
        <IndexRoute component={ComponentA}/>
        <Route path="/ComponentA" component={ComponentA}/>
        <Route path="/ComponentB" component={ComponentB}/>
  </Route>
);