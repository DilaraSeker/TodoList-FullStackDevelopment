import React, { Component } from 'react'
// API SERVICE
import TodoApi from "../service/TodoApi";
// CSS
import '../style.css';
// TODO ITEM FOR EACH TODO
import TodoItem from './TodoItem';

// ALL TODOS COMPONENT
export default class TodoListAll extends Component {
  // CONSTRUCTOR
  constructor(props) {
    super(props);
    // STATES
    this.state = {
      todoList: [],
      show: false,
    }
  }

  // BEFORE RENDER COMPONENT
  componentDidMount() {
    TodoApi.todoApiList().then(
      (response) => {
        this.setState({
          todoList: response.data
        })
      }).catch((error) => {
        console.log("Cannot get list from database")
      });
  }

  render() {
    return (
      <div className="list">
        {
          this.state.todoList.map(temp =>
            <div>
              <TodoItem todo={temp}>{console.log(temp)}</TodoItem>
              <div className="space"></div>
            </div>
          )
        }
      </div>
    )
  }
}
