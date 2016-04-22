/// <reference path="../../../typings/main.d.ts" />

import React from 'react'
var { connect, store } = require('react-redux');
import { createAddAction } from './../actions/actions'

class AddTodo extends React.Component<{dispatch: any}, any> {
  private input : HTMLInputElement;
  
  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!this.input.value.trim()) {
            return
          }
          this.props.dispatch(createAddAction( {text: this.input.value}))
          this.input.value = ''
        } }>
          <input ref={node => { this.input = node} } />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>

    );
  }
}

const AddTodoComponent = connect()(AddTodo)

export default AddTodoComponent