import React, { Component } from 'react';

export default class TodoInput extends Component {
    state = {
        value: ''
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.inputTask(this.state.value);
        this.setState({
            value: ''
        })
    }
    onChange = (e) => 
    this.setState({
        value: e.target.value
    });
    render() {        
        return (
            <div className="card card-body my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                    <input type="text" className="form-control text-capitalize" 
                    placeholder="add a new task" value={this.state.value} onChange={this.onChange}/>
                        <div className="input-group-append">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                    </div>    
                    <button type="submit" className="btn btn-block btn-primary mt-3">
                        Add Task
                    </button>          
                </form>
            </div>
        )
    }
}
