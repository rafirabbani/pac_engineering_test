import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {tasks, handleCancel, handleComplete, handleDetail} = this.props;
        return (
            <ul className="list-group my-3">
                <h3 className="text-capitalize text-center">
                    Task List
                </h3>
                {tasks.map(task => {
                    return (
                        <TodoItem 
                        key={task.id} 
                        value={task.value}
                        handleCancel={() => handleCancel(task.id)}
                        handleComplete={() => handleComplete(task.id)}
                        handleDetail={() => handleDetail(task.id)}
                        task={task}
                        />
                        )
                    })
                }
                
            </ul>
        );
    }
}
