import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  
  addTask = (e, task) => {
    e.preventDefault()
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    }

    this.setState({...this.state, todos: [...this.state.todos, newTask]})
  }

  toggleCompleted = taskID => {
    this.setState({...this.state, todos: this.state.todos.map(task => {
      if (task.id == taskID) {
        return {...task, purchased: !task.purchased}
      }
      return task;
    })})
}

  clearCompleted = () => {
    this.setState({...this.state, todos: this.state.todos.filter(task => !task.completed)})
  }

  render() {
    return (
      <div className="App">
        <div className="add-item">
           <Form addTask={this.addTask} />
         </div>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos} />
        <button className="clear-btn" onClick={this.clearCompleted}>Clear Completed</button>
       </div>
    )
  }
}
