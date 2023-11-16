import React, { Component } from 'react'
// ROUTER
import { withRouter } from "react-router-dom";
// API SERVICE
import TodoApi from "../service/TodoApi";

// LIST BUTTONS COMPONENT
class DeleteButtons extends Component {

    // CONSTRUCTOR
    constructor(props) {
        super(props);
        // STATES
        this.state = {
            todoList: [],
        }
        //BIND
        this.deleteAllTodos = this.deleteAllTodos.bind(this);
        this.deleteDoneTodos = this.deleteDoneTodos.bind(this);
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

    // DELETE ALL
    deleteAllTodos() {
        TodoApi.todoApiDeleteAll().then(
            (response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            });
        window.location.reload()
    }

    // DELETE DONE
    deleteDoneTodos() {
        if (this.state.todoList.completed === false) {
            console.log("false")
        }
        const filteredArray = this.state.todoList.filter((item) => item.completed === true);
        console.log(filteredArray)
        console.log("selam")
        filteredArray.map(temp => {
            TodoApi.todoApiDelete(temp.id).then(
                (response) => {
                    this.setState({
                        todoList: this.state.todoList.filter(
                            todoList => todoList.id !== temp.id
                        )
                    });
                    console.log()
                }).catch(() => {
                    console.log("Delete task not work")
                });
        }
        )
        window.location.reload()
    }

    render() {
        return (
            <div className="btns-row">
                <button className="delete-btns" onClick={this.deleteDoneTodos} type="submit" name="submit" id="deleteDone" title="Delete Done Tasks">
                    Delete done tasks
                </button>

                <button className="delete-btns" onClick={this.deleteAllTodos} type="submit" name="submit" id="deleteAll" title="Delete Tasks All">
                    Delete all tasks
                </button>
            </div >
        )
    }
} // END COMPONENT
export default withRouter(DeleteButtons);