package com.dilaraseker.todolist.repository;

import com.dilaraseker.todolist.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    public Todo findByTask(String task);
    public List<Todo> findByCompletedTrue();
    public List<Todo> findByCompletedFalse();
    public List<Todo> findAll();
    public Todo getById(Long id);
    public void deleteAll();
}
