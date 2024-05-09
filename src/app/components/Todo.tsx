"use client";

import React, { FormEvent, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
import { addTodo, updateSearchTerm } from "@/redux/actions";

const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = (event: FormEvent) => {
    event.preventDefault();
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        TODO LIST
      </h2>

      {/* filter and search */}
      <div className="justify-between">
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            type="text"
            name="text"
            id="addTodoInput"
            placeholder="search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <div className="py-3 dark:bg-dark">
            <FilterButton />
          </div>
        </div>

        {/* them todoList */}
        <form onSubmit={handleAddTodoClick}>
          <div className="flex items-center mb-4">
            <input
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              type="text"
              name="text"
              id="addTodoInput"
              placeholder="Add Todo"
              className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              onClick={handleAddTodoClick}
            >
              <BsPlus />
            </button>
          </div>
        </form>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
