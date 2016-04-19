/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../interfaces.d.ts" />

import * as React from 'react';
var TodosView              = require ('components/TodosView');
var TodosForm              = require ('components/TodosForm');
var { bindActionCreators } = require ('redux');
var TodoActions = require('../actions/TodoActions');
var { connect }            = require ('react-redux');

function mapState(state: IHelloFormProps){
    return {todos: state.todos };
}

class Home extends React.Component<any, any> {
  render() {
    const { todos, dispatch } = this.props;
    
    return (
      <div id="todo-list">
        <TodosView todos={todos} 
          {...bindActionCreators(TodoActions, dispatch)} />
        <TodosForm
          {...bindActionCreators(TodoActions, dispatch)} />
      </div>
    );
  }
}

export default connect(mapState)(Home);