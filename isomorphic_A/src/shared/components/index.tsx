/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDom from 'react-dom';

interface MyProps {}
interface MyState {}

class Contacts extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div id="app-view">
        <h1>Todos...</h1>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default Contacts;

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

ReactDom.render(
  <div><CommentList /><Contacts/></div>,
  document.getElementById('react-view')
);