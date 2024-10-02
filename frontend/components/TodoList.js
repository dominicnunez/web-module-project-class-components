import React from 'react'

import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">TodoList
      {this.props.todos.map(task => (
        <Todo toggleCompleted={this.props.toggleCompleted} key={task.id} task={task} />
      ))}
    </div>
    )
  }
}
