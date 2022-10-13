import React from 'react';
import ListData from "./listTodo";

export default function FormProcces ({todos, deleteTodos, checkTodos}) {
    const listTodos = todos.map(todoList => (
        <ListData key={todoList.id} data={todoList} delete={deleteTodos} check={checkTodos}/>
    ));

    return (
        <ul>
            {listTodos}
        </ul>
    )
}