/// <reference path="../../../typings/main.d.ts" />

import React, { PropTypes } from 'react'
import TodoComponent from './TodoComponent'
import ITodo from './TodoComponent'
import Todo from './../../Todo'

// per the mappers, this is the interface of the object that is defined
// todo: question: how can we make sure that this is actually what was passed in? should we use proptypes then?
interface ITodoListComponentProps {
    todos: Todo[],
    onTodoClick(id: number, completed: boolean): void    // todo: how should this be typed? void?  Also, note i didn't want to pass whole todo object for perf
}


class TodoListComponent extends React.Component<ITodoListComponentProps, any> {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo =>
                        <TodoComponent key={todo.id}
                            {...todo}
                            onClick={() => this.props.onTodoClick(todo.id, todo.completed) }
                            />
                    )
                }
            </ul>);
    }
}

export default TodoListComponent