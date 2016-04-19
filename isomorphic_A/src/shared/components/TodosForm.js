/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../interfaces.d.ts" />
"use strict";
const React = require('react');
class TodosForm extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleSubmit = () => {
            let node = this.refs['todo-input'];
            this.props.createTodo(node.value);
            node.value = '';
        };
    }
    render() {
        return (React.createElement("div", {id: "todo-form"}, React.createElement("input", {type: "text", placeholder: "type todo", ref: "todo-input"}), React.createElement("input", {type: "submit", value: "OK!", onClick: this.handleSubmit})));
    }
}
module.exports = TodosForm;
//# sourceMappingURL=TodosForm.js.map