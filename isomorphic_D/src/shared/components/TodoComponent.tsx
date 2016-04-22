/// <reference path="../../../typings/main.d.ts" />

import React from 'react'

export interface ITodoComponentProps
{
    onClick : any,
    completed : boolean,
    text : string
}

export default class TodoComponent extends React.Component<ITodoComponentProps, any> {
    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                textDecoration: this.props.completed ? 'line-through' : 'none'
                }} >
                {this.props.text}
            </li>
            );
    }
}