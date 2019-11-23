import React, { Component } from 'react'
import TodoInput from'./components/TodoInput';
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid';

class App extends Component {
  state = {
    tasks: [],
  };

  inputTask = (value) => {
    
    const newTask= {
      id: uuid(),
      value: value,
      completed: false
    }

    const updatedTasks = [...this.state.tasks, newTask]
    this.setState({
      tasks: updatedTasks
    })
  };

  handleDelete = (id) => {
    const filteredTasks = this.state.tasks.filter(task => 
      task.id !== id)
      this.setState({
        tasks: filteredTasks
        
      });
  }

  handleComplete = (id) => {
    const completeTasks = this.state.tasks.map(task =>{
      if(task.id === id)
        task.completed = !task.completed;
        return task;
    })
    this.setState({
      tasks: completeTasks
    });
  }
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            to do app
          </h3>
          <TodoInput  
            inputTask={this.inputTask}
          />
            <TodoList 
            tasks={this.state.tasks}
            handleDelete={this.handleDelete}
            handleComplete={this.handleComplete}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default App;
