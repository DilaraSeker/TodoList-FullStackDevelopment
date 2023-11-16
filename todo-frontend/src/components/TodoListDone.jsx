import React, { Component } from 'react'
// API SERVICE
import TodoApi from "../service/TodoApi";
// CSS
import '../style.css';
// TODO ITEM FOR EACH TODO
import TodoItem from './TodoItem';

// DONE TODOS COMPONENT
export default class TodoListDone extends Component {

  // CONSTRUCTOR
  constructor(props) {
    super(props);
    // STATES
    this.state = {
      todoList: [],
      show: false,
      todoListDone: [],
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

  // FILTER CONDITION
  filterCondition = (item) => item.completed === true;

  render() {
    const filteredArray = this.state.todoList.filter(this.filterCondition);
    return (
      <div className="list">
        {
          filteredArray.map(temp =>
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
