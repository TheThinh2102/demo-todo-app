import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "@reduxjs/toolkit/query";

const TodoList: React.FC = () => {
    const filteredTodos = useSelector((state: RootState) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchesFilter =
                (filter === 'COMPLETED' && todo.completed) ||
                (filter === 'INCOMPLETE' && !todo.completed) ||
                filter === 'ALL';

            const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchesFilter && matchesSearch;
        });
    });

    console.log('Filtered Todos:', filteredTodos);
    
    return (
        <ul>
            {
                filteredTodos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index}/>
                ))
            }
        </ul>
    );
}

export default TodoList;
