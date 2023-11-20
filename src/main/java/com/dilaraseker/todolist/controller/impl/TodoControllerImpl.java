package com.dilaraseker.todolist.controller.impl;
// Todo Model
import com.dilaraseker.todolist.controller.ITodoController;
import com.dilaraseker.todolist.model.Todo;
// Todo Service
import com.dilaraseker.todolist.service.TodoService;
// Spring Annotations & Controller
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
// Java List
import java.util.List;

@Controller
@RequestMapping("/todos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TodoControllerImpl implements ITodoController<Todo> {

    @Autowired
    private TodoService todoService;

    // LIST ALL TODOS
    @GetMapping("/list")
    public ResponseEntity<List<Todo>> getAllTasks() {

        return ResponseEntity.ok(todoService.getAllTask());
    }

    // LIST COMPLETED TODOS
    @GetMapping("/done")
    public ResponseEntity<List<Todo>> getAllCompletedTasks() {
        return ResponseEntity.ok(todoService.findAllCompletedTask());
    }

    // LIST INCOMPLETE TODOS
    @GetMapping("/undone")
    public ResponseEntity<List<Todo>> getAllIncompleteTasks() {
        return ResponseEntity.ok(todoService.findAllInCompleteTask());
    }

    // ADD A TODO
    @PostMapping("/add")
    public ResponseEntity<Todo> createTask(@RequestBody Todo task) {
        return ResponseEntity.ok(todoService.createNewTask(task));
    }
    // UPDATE TODO
    @PutMapping("/update/{id}")
    public ResponseEntity<Todo> updateTask(@PathVariable Long id, @RequestBody Todo task) {
        task.setId(id);
        return ResponseEntity.ok(todoService.updateTask(task));
    }
    // DELETE CHOSEN TODO
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Boolean> deleteTasks(@PathVariable Long id) {
        todoService.deleteTask(id);
        return ResponseEntity.ok(true);
    }
    // DELETE ALL TODOS
    @DeleteMapping("/deleteall")
    public ResponseEntity<Boolean> deleteAllTasks() {
        todoService.deleteAllTask();
        return ResponseEntity.ok(true);
    }


}