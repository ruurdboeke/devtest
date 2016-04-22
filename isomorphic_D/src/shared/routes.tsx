var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

import AppView from '../server/mainServerSideEntry';
import VisibleTodoListContainer from './components/VisibleTodoListContainer'

export default (
  <Route name="app" component={AppView} path="/">
    <IndexRoute component={VisibleTodoListContainer}/>
    <Route Path="/visibleTodoList" component={VisibleTodoListContainer}/>
  </Route>
);