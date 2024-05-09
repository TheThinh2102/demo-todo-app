import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { State } from "@/redux/reducers";
import { Filter } from "../constants/enum";

const TodoList: React.FC = () => {
    const filteredTodos = useSelector((state: State) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchesFilter =
                (filter === Filter.COMPLETE && todo.isCompleted) ||
                (filter === Filter.INCOMPLETE && !todo.isCompleted) ||
                filter === Filter.ALL;

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
