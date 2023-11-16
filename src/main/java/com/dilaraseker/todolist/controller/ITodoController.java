package com.dilaraseker.todolist.controller;

import com.dilaraseker.todolist.model.Todo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface ITodoController<T> {
    // LIST ALL TODOS
    public ResponseEntity<List<Todo>> getAllTasks();
    // LIST COMPLETED TODOS
    public ResponseEntity<List<Todo>> getAllCompletedTasks();
    // LIST INCOMPLETE TODOS
    public ResponseEntity<List<Todo>> getAllIncompleteTasks();
    // ADD A TODO
    public ResponseEntity<Todo> createTask(T t);
    // UPDATE TODO
    public ResponseEntity<Todo> updateTask(Long id,T t);
    // DELETE CHOSEN TODO
    public ResponseEntity<Boolean> deleteTasks(Long id);
    // DELETE ALL TODOS
    public ResponseEntity<Boolean> deleteAllTasks();

}
