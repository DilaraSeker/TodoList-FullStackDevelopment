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
    }
  }

  // BEFORE RENDER COMPONENT
  componentDidMount() {
    TodoApi.todoApiList().then(
      (response) => {
       // if(response.data.completed == true){
          this.setState({
            todoList: response.data
          })
        //}
        
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
