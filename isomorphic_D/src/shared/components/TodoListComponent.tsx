/// <reference path="../../../typings/main.d.ts" />

import React from 'react'
import TodoComponent from './TodoComponent'
import ITodo from './TodoComponent'
import Todo from './../../Todo'

// 
interface ITodoListComponentProps {
    todos: Todo[],
    onTodoClick(id: number): void    // todo: how should this be typed?
}

export default class TodoListComponent extends React.Component<ITodoListComponentProps, any> {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo =>
                        <TodoComponent key={todo.id}
                            {...todo}
                            onClick={() => this.props.onTodoClick(todo.id) }
                            />
                    )
                }
            </ul>);
    }
}