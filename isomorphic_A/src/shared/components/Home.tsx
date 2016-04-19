/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../interfaces.d.ts" />

import * as React from 'react';
var TodosForm              = require('./TodosForm');
var TodosView              = require('./TodosView').default;
var { bindActionCreators } = require ('redux');
var TodoActions = require('../actions/TodoActions');
var { connect }            = require ('react-redux');

// function mapState(state: IHelloFormProps){
//     return {todos: state.todos };
// }

export default class Home extends React.Component<any, any> {
  render() {
    const { todos, dispatch } = this.props;
    return (
      <div id="todo-list">
        <h1>home</h1>
      </div>
    );
  }
}

//export default connect(mapState)(Home);