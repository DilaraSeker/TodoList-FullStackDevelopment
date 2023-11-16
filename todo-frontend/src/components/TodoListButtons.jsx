import React, { Component } from 'react'
// ROUTER
import { withRouter } from "react-router-dom";

// LIST BUTTONS COMPONENT
class TodoListButtons extends Component {
  // CONSTRUCTOR
  constructor(props) {
    super(props);
    //BIND
    this.listAllTodos = this.listAllTodos.bind(this);
    this.listDoneTodos = this.listDoneTodos.bind(this);
    this.listUndoneTodos = this.listUndoneTodos.bind(this);
  }
  // ALL
  listAllTodos() {
    this.props.history.push("/todos/list")
  }
  // LIST COMPLETED TASKS
  listDoneTodos() {
    this.props.history.push("/todos/done")
  }
  // LIST NOT COMPLETED TASKS
  listUndoneTodos() {
    this.props.history.push("/todos/undone")
  }
  render() {
    return (
      <div className="btns-row">
        <button className="list-btns" onClick={this.listAllTodos} type="submit" name="submit" id="all" title="All">
          All
        </button>

        <button className="list-btns" onClick={this.listDoneTodos} type="submit" name="submit" id="done" title="Done">
          Done
        </button>

        <button className="list-btns" onClick={this.listUndoneTodos} type="submit" name="submit" id="todo" title="Todo">
          Todo
        </button>
      </div >
    )
  }
} // END COMPONENT
export default withRouter(TodoListButtons);