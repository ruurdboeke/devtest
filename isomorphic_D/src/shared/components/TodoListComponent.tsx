/// <reference path="../../../typings/main.d.ts" />

import React from 'react'
import TodoComponent from './TodoComponent'
import ITodo from './TodoComponent'
import Todo from './../../Todo'

interface ITodoListComponentProps
{
    todos : Todo[],
    onTodoClick(id:number) : any
}

export default class TodoListComponent extends React.Component<ITodoListComponentProps, any> {
    render() {
        return (    
            <ul>
                {
                    this.props.todos.forEach(element => {
                        <TodoComponent key={element.id}
                        {...element}
                        onClick={() => this.props.onTodoClick(element.id)} />
                    })
                }
            </ul>);
    }
}