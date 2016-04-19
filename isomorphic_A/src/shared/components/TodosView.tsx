/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../interfaces.d.ts" />

import * as React from 'react';

interface MyState {}

export default class TodosView extends React.Component<IHelloFormProps, any> {
  handleDelete = (e : any) => {
    const id = Number(e.target.dataset.id);
    
    // Equivalent to `dispatch(deleteTodo())`
    this.props.deleteTodo(id);
  }
  handleEdit = (e : any) => {
    const id  = Number(e.target.dataset.id);
    const val = this.props.todos.get(id).text
    
    // For cutting edge UX
    let newVal = window.prompt('', val);
    this.props.editTodo(id, newVal);
  }
 
  render() {
    return (
      <div id="todo-list">
        {
          this.props.todos.map( (todo : any, index : number) => {
            return (
              <div key={index}>
                <span>{todo}</span>
              
                <button data-id={index} onClick={this.handleDelete}>
                  X
                </button>
                <button data-id={index} onClick={this.handleEdit}>
                  Edit
                </button>
              </div>
            );
          })
        }
      </div>
    );
  }
}
