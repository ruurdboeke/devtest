/// <reference path="../../../typings/main.d.ts" />
/// <reference path="../interfaces.d.ts" />
"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require('react');
var TodosForm = require('./TodosForm');
var TodosView = require('./TodosView');
var { bindActionCreators } = require('redux');
var TodoActions = require('../actions/TodoActions');
var { connect } = require('react-redux');
function mapState(state) {
    return { todos: state.todos };
}
class Home extends React.Component {
    render() {
        const { todos, dispatch } = this.props;
        return (React.createElement("div", {id: "todo-list"}, React.createElement(TodosView, __assign({todos: todos}, bindActionCreators(TodoActions, dispatch))), React.createElement(TodosForm, __assign({}, bindActionCreators(TodoActions, dispatch)))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = connect(mapState)(Home);
//# sourceMappingURL=Home.js.map