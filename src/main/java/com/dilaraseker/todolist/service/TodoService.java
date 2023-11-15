package com.dilaraseker.todolist.service;
// Todo Model
import com.dilaraseker.todolist.model.Todo;
// Todo Repository
import com.dilaraseker.todolist.repository.TodoRepository;
// Spring Annotations
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public Todo createNewTask(Todo task) {
        return todoRepository.save(task);
    }

    public List<Todo> getAllTask() {
        return todoRepository.findAll();
    }

    public Todo findTaskById(Long id) {
        return todoRepository.getById(id);
    }

    public List<Todo> findAllCompletedTask() {
        return todoRepository.findByCompletedTrue();
    }

    public List<Todo> findAllInCompleteTask() {
        return todoRepository.findByCompletedFalse();
    }

    public void deleteTask(Long id) {
        Todo task = todoRepository.findById(id).get();
        todoRepository.delete(task);
    }

    public Todo updateTask(Todo task) {
        return todoRepository.save(task);
    }

    public void deleteAllTask() {
        todoRepository.deleteAll();
    }
}

