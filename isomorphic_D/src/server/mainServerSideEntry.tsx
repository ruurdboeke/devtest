/// <reference path="../../typings/main.d.ts" />

import * as React from 'react';
import VisibleTodoListContainer from './../shared/components/VisibleTodoListContainer'
import AddTodo from './../shared/components/AddTodoComponent'

export default class AppView extends React.Component<any, any> {
      static propTypes = {
        children: React.PropTypes.node
    };
  render() {
    return (
        <div >appview is here, not currently using routing <input></input>
            <VisibleTodoListContainer />
            <AddTodo />
        </div>
    );
  }
}
