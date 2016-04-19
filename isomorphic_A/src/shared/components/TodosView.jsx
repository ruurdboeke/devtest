/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../interfaces.d.ts" />
import * as React from 'react';
export default class TodosView extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleDelete = (e) => {
            const id = Number(e.target.dataset.id);
            // Equivalent to `dispatch(deleteTodo())`
            this.props.deleteTodo(id);
        };
        this.handleEdit = (e) => {
            const id = Number(e.target.dataset.id);
            const val = this.props.todos.get(id).text;
            // For cutting edge UX
            let newVal = window.prompt('', val);
            this.props.editTodo(id, newVal);
        };
    }
    render() {
        return (<div id="todo-list">
        {this.props.todos.map((todo, index) => {
            return (<div key={index}>
                <span>{todo}</span>
              
                <button data-id={index} onClick={this.handleDelete}>
                  X
                </button>
                <button data-id={index} onClick={this.handleEdit}>
                  Edit
                </button>
              </div>);
        })}
      </div>);
    }
}
//# sourceMappingURL=TodosView.jsx.map