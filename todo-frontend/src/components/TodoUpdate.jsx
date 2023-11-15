import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import TodoApi from '../service/TodoApi';

export default class TodoUpdate extends Component {
  constructor(props) {
    super(props);
    // STATE
    this.state = {
      task: null,

    }
    // BIND
    this.handleChange = this.handleChange.bind(this);
    this.todoSubmit = this.todoSubmit.bind(this);
  }
  handleChange(event) {
    const { value } = event.target;
    this.setState({ task: value });

  }
  // SUBMIT 
  todoSubmit = async (event) => {
    event.preventDefault();
    const { task } = this.state;
    const todoDto = {
    task, completed: false
    }
    
   TodoApi.todoApiUpdate(this.props.exTaskId, todoDto).then((response) => {
     if (response.status === 200) {
     
     } 
     window.location.reload()
   }).catch((error) => {
     console.error(error);
 
   });

   
   
  };
  render() {
    return (
      <div className='input_container'>
        <form className="new" onSubmit={this.todoSubmit}>
          <div className="input_row">
            <i className='input-icon'><FontAwesomeIcon icon={faBook} /></i>
            <input className="input" type="text" name="task" id="task"
              value={this.state.task} onChange={this.handleChange} placeholder={this.props.exTask}
              required autofocus
              title="Write your task" />

          </div>
          <div className="add_row">
            <button className="add-btn" type="submit" name="submit" id="submit" title="Gönder" value="Submit">
              Update Task
            </button>
          </div>
        </form>
      </div>
    )
  }
}





