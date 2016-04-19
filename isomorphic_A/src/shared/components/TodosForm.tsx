/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../interfaces.d.ts" />

import * as React from 'react';

export default class TodosForm extends React.Component<IHelloFormProps, any> {
  handleSubmit = () => {
    let node = this.refs['todo-input'] as any;
    this.props.createTodo(node.value);
    node.value = '';
  }
  
  render() {
    return (
      <div id="todo-form">
        <input type="text" placeholder="type todo" ref="todo-input" />
        <input type="submit" value="OK!" onClick={this.handleSubmit} />
      </div>
    );
  }
}
