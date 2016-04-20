var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

import AppView from '../server/mainServerSideEntry';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';


export default (
  <Route name="app" component={AppView} path="/">
        <IndexRoute component={ComponentA}/>
        <Route path="/components/ComponentA" component={ComponentA}/>
        <Route path="/components/ComponentB" component={ComponentB}/>
  </Route>
);