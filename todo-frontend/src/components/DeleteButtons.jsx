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
        //BIND
        this.deleteAllTodos = this.deleteAllTodos.bind(this);
        this.deleteDoneTodos = this.deleteDoneTodos.bind(this);

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