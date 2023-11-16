import React, { Component } from 'react';
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
// CSS FILE
import '../style.css';
// API SERVICE
import TodoApi from "../service/TodoApi";
// BOOTSTRAP MODAL & BUTTON
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// UPDATE COMPONENT
import TodoUpdate from './TodoUpdate';

// TODO ITEM COMPONENT
export default class TodoItem extends Component {
    // CONSTRUCTOR
    constructor(props) {
        super(props);
        // STATES
        this.state = {
            isChecked: false,
            todo: { id: null, task: null, completed: null },
            show: false,
        };
        // BIND
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.delete = this.delete.bind(this);
    }

    // SHOW UPDATE MODAL
    handleShow = () => this.setState({
        show: true
    });

    // CLOSE UPDATE MODAL
    handleClose = () => this.setState({
        show: false
    });

    // BEFORE RENDER COMPONENT
    componentDidMount() {
        const { todo } = this.props;
        this.setState({ todo: todo });
        console.log(todo)
    }

    // DELETE
    delete(id) {
        console.log(id)
        TodoApi.todoApiDelete(id).then(
            (response) => {
                this.setState({
                    todoList: this.state.todoList.filter(
                        todoList => todoList.id != id
                    )
                });
                console.log()
            }).catch(() => {
                console.log("Delete task not work")
            });
        window.location.reload()
    }

    // TOGGLE CHECKBOX
    toggleCheckbox = () => {
        this.setState((prevState) => ({
            isChecked: !prevState.isChecked,
        }));
    };

    render() {
        const { isChecked } = this.state;
        return (
            <div className='list-item'>
                
                {/* Task */}
                <p className='todo' style={{ textDecoration: isChecked ? 'line-through' : 'none' }} >
                    {this.state.todo.task}
                </p>

                {/* Icons */}
                <div className='list-icons'>

                    {/* Complete Icon */}
                    <i className='list-check-icon'  >
                        <div className={`checkbox-container ${isChecked ? 'checked' : ''}`} onClick={this.toggleCheckbox}>
                            <div className="checkbox">{isChecked && <div className="checkmark" />}</div>
                        </div>
                    </i>

                    {/* Edit Pen Icon */}
                    <i className='list-pen-icon'>
                        <FontAwesomeIcon icon={faPen} onClick={this.handleShow} style={{ "cursor": "pointer" }} />
                    </i>
                    {/* Update Modal */}
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter" >Update Todo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <TodoUpdate exTask={this.state.todo.task} exTaskId={this.state.todo.id}></TodoUpdate>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Delete Trash Icon */}
                    <i style={{ "cursor": "pointer" }} className='list-trash-icon'
                        onClick={() => {
                            if (window.confirm("Are you sure to delete the task?")) {
                                this.delete(this.state.todo.id);
                            } else {
                                window.alert("You gave up deleting!")
                            }
                        }}>
                        <FontAwesomeIcon icon={faTrash} />
                    </i>
                </div>
                <br />
            </div>
        );
    }
} // END
