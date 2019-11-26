import React, { Component } from 'react';
import TodoInput from'./components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    tasks: [],
  };

  inputTask = (value) => {
    
    const newTask= {
      id: uuid(),
      value: value,
      completed: false,
      open: false,
      cancel: false
    }

    const updatedTasks = [...this.state.tasks, newTask]
    this.setState({
      tasks: updatedTasks
    });
  }

  handleCancel = (id) => {
    const cancelTasks = this.state.tasks.map(task => {
      if(task.id === id)
        task.cancel = !task.cancel;
        return task
    });
    this.setState({
      tasks: cancelTasks
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

  handleDetail = (id) => {
    const openTasks = this.state.tasks.map(task => {
      if(task.id === id)
        task.open = !task.open;
        return task;
    })
    this.setState({
      tasks: openTasks
    })
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
            handleCancel={this.handleCancel}
            handleComplete={this.handleComplete}
            handleDetail={this.handleDetail}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default App;
