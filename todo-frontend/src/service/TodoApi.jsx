import axios from 'axios';

const TODO_URL = "http://localhost:8080/todos";

// TODO API
class TodoApi {

    // LIST ALL TODOS
    todoApiList() {
        return axios.get(`${TODO_URL}/list`)
    }

    // LIST COMPLETED TODOS
    todoApiListDone() {
        return axios.get(`${TODO_URL}/done`)
    }

    // LIST INCOMPLETE TASKS
    todoApiListUnDone() {
        return axios.get(`${TODO_URL}/undone`)
    }

    // ADD A TASK
    todoApiCreate(todoDto) {
        return axios.post(`${TODO_URL}/add`, todoDto)
    }

    // UPDATE TASK
    todoApiUpdate(id, todoDto) {
        return axios.put(`${TODO_URL}/update/${id}`, todoDto)
    }

    // DELETE CHOSEN TASK
    todoApiDelete(id) {
        return axios.delete(`${TODO_URL}/delete/${id}`)
    }

    // DELETE ALL
    todoApiDeleteAll() {
        return axios.get(`${TODO_URL}/deleteall`);
    }

} // END 


export default new TodoApi();