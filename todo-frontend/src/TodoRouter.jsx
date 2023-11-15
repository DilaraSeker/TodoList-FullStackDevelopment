// React
import React from 'react'
// CSS
import './style.css';

// ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// INPUT
import TodoInput from './components/TodoInput';

// LIST BUTTONS
import TodoListButtons from './components/TodoListButtons';

// LIST ALL TODOS
import TodoListAll from './components/TodoListAll';

// LIST DONE TODOS
import TodoListDone from './components/TodoListDone';

// LIST UNDONE TODOS
import TodoListUndone from './components/TodoListUndone';

// UPDATE
import TodoUpdate from './components/TodoUpdate';

// TODO ROUTER FUNCTION COMPONENT
function TodoRouter() {
    return (
        <div className='app'>
            <Router >
                <br />
                <h2>TodoInput</h2>
                <TodoInput />
                <br />
                <div className="list-container">
                    <h2>TodoList</h2>
                    <TodoListButtons />
                    <br /><br />
                    <Switch>
                        <Route path="/" exact component={TodoListAll}></Route>
                        <Route path="/todos/list" component={TodoListDone}></Route>
                        <Route path="/todos/done" component={TodoListDone}></Route>
                        <Route path="/todos/undone" component={TodoListUndone}></Route>
                        <Route path="/todo/update/:id" component={TodoUpdate}></Route>
                    </Switch>
                </div>
            </Router>

        </div>
    ) //end return
} // end function 

// EXPORT
export default TodoRouter;