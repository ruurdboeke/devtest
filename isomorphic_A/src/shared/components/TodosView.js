/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../interfaces.d.ts" />
"use strict";
const React = require('react');
class TodosView extends React.Component {
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
        return (React.createElement("div", {id: "todo-list"}, this.props.todos.map((todo, index) => {
            return (React.createElement("div", {key: index}, React.createElement("span", null, todo), React.createElement("button", {"data-id": index, onClick: this.handleDelete}, "X"), React.createElement("button", {"data-id": index, onClick: this.handleEdit}, "Edit")));
        })));
    }
}
module.exports = TodosView;
//# sourceMappingURL=TodosView.js.map