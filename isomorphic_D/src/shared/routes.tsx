var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

import AppView from '../server/mainServerSideEntry';
import TodoListContainer from './containers/TodoListContainer'

export default (
  <Route name="app" component={AppView} path="/">
    <IndexRoute component={TodoListContainer}/>
    <Route Path="/TodoList" component={TodoListContainer}/>
  </Route>
);