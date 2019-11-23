import React, { Component } from 'react';
export default class TodoItem extends Component {
    getStyle = () => {
        return {
        textDecoration: this.props.task.completed ? 'line-through' : 'none'
        }
    };
    render() {
        const {completed} = this.props.task;
        return (
            <li className={
                completed ? "list-group-item text-capitalize d-flex justify-content-between my-1 bg-primary text-white" 
                : "list-group-item text-capitalize d-flex justify-content-between my-1"}>
                <h6>
                {this.props.value}
                </h6>
                <div className="todo-icon">
                    <span> 
                        <button className= "btn text-success" onClick={this.props.handleComplete}>
                        <i className="fas fa-check"/>
                        </button>
                    </span>
                    <span> 
                        <button className="btn text-danger" onClick={this.props.handleDelete}>
                    <i className="fas fa-trash"/>
                    </button>  
                    </span>
                </div>
            </li>
        );
    }
}
