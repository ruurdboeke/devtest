/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDom from 'react-dom';

interface MyProps {}
interface MyState {}

class AppView extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div id="app-view">
        <h1>Todos</h1>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

ReactDom.render(
  <div></div>,
  document.getElementById('react-view')
);