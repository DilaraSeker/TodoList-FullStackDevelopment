import React, { Component } from 'react'
// ICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
// API SERVICE
import TodoApi from '../services/TodoApi';
//ROUTER
import { withRouter } from "react-router-dom";

// INPUT COMPONENT
class TodoInput extends Component {
  // CONSTRUCTOR
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
  
  // HANDLE CHANGES
  handleChange(event) {
    const { value } = event.target;
    this.setState({ task: value });
  }

  // SUBMIT 
  todoSubmit = async (event) => {
    event.preventDefault();
    const { task } = this.state;
    //console.log(this.state.task)
    const todoDto = {
      task, completed: false
    }
    //console.log(todoDto)
    TodoApi.todoApiCreate(todoDto).then((response) => {
      if (response.status === 200) {
      }
      window.location.reload()
    }).catch((error) => {
      console.error(error);
    });
  } // END SUBMIT

  render() {
    return (
      <div className='input_container'>
        <form className="new" onSubmit={this.todoSubmit}>
          <div className="input_row">
            <i className='input-icon'><FontAwesomeIcon icon={faBook} /></i>
            <input className="input" type="text" name="task" id="task"
              value={this.state.task} onChange={this.handleChange}
              placeholder="New Todo" required autofocus title="Write your task" />
          </div>
          <div className="add_row">
            <button className="add-btn" type="submit" name="submit" id="submit" title="Gönder" value="Submit">
              Add new task
            </button>
          </div>
        </form>
      </div>
    ) // END RETURN
  } // END RENDER
} // END COMPONENT

export default withRouter(TodoInput);