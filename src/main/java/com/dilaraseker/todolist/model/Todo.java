package com.dilaraseker.todolist.model;

import jakarta.persistence.*;
import lombok.*;

// LOMBOK
@Data
@Entity
@Table(name = "Todo")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // this is the primary key which will be auto generated
    private Long id;
    private String task;
    private boolean completed;

    public Todo(String task, boolean completed) {
        this.task = task;
        this.completed = completed;
    }

    public Todo() {

    }


}
