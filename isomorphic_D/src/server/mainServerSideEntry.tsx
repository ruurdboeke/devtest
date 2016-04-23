/// <reference path="../../typings/main.d.ts" />

import * as React from 'react';
import TodoListContainer from './../shared/containers/TodoListContainer'
import AddTodoContainer from './../shared/containers/AddTodoContainer'
import FooterComponent from './../shared/components/FooterComponent'

export default class AppView extends React.Component<any, any> {
      static propTypes = {
        children: React.PropTypes.node
    };
  render() {
    return (
        <div >appview is here, not currently using routing <input></input>
            <TodoListContainer />
            <AddTodoContainer />
            <FooterComponent />
        </div>
    );
  }
}
