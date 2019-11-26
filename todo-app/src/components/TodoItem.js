import React, { Component } from 'react';
export default class TodoItem extends Component {
    
    render() {
        const {completed, open, value, cancel} = this.props.task;
        return (
            <li className={
                completed ? "list-group-item bg-primary d-flex justify-content-between my-1" 
                : cancel ? "list-group-item bg-danger d-flex justify-content-between my-1" : "list-group-item  d-flex justify-content-between my-1"}> 
                <h1>
                    <button type="button" class="btn btn-link-dark text-capitalize" onClick={this.props.handleDetail}>
                    {this.props.value}
                    </button>
                        <div className={open ? "" : "collapse"}>
                            <h6>Task Details</h6>
                            <li class="h6 text-dark text-capitalize">Title = {value} </li>
                            <li class="h6 text-dark">Status = {completed ? `Completed` : cancel ? `Cancelled` : `Queued`} </li>
                        </div>  
                </h1>
                <div className="todo-icon">
                    <span> 
                        <button className= "btn text-success" onClick={this.props.handleComplete}>
                        <i className="fas fa-check"/>
                        </button>
                    </span>
                    <span> 
                        <button className="btn text-warning" onClick={this.props.handleCancel}>
                    <i className="fa fa-close"/>
                    </button>  
                    </span>
                </div>
            </li>
        );
    }
}
