import React, { Component } from 'react'
// API SERVICE
import TodoApi from "../services/TodoApi";
// CSS
import '../style.css';
// TODO ITEM FOR EACH TODO
import TodoItem from './TodoItem';

// ALL TODOS COMPONENT
export default class TodoListAll extends Component {
  // CONSTRUCTOR
  constructor(props) {
    super(props);

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
            <TodoItem todo={temp}>{console.log(temp)}</TodoItem>
          )
        }
      </div>
    )
  }
}
