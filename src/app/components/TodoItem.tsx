import { toggleTodo, removeTodo, markCompleted, markIncompleted } from '@/redux/actions';
import React from 'react';
import { FaToggleOn, FaToggleOff, FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Todo from './Todo';

interface TodoItemProps {
    todo: typeof Todo;
    index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
    const dispatch = useDispatch();

    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
            <div className='flex items-center'>
                <span className="mr-4 text-gray-500">{index + 1}</span>
                <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
            </div>
            <div className='space-x-3 ml-8'>
                <button
                    onClick={() => dispatch(toggleTodo(index))}
                    className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded">{todo.completed ?
                        <FaToggleOff /> : <FaToggleOn />}
                </button>
                <button
                    className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
                    onClick={() => dispatch(removeTodo(index))}>
                    <FaTrash />
                </button>
                {!todo.completed && (
                    <button
                        className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
                        onClick={() => dispatch(markCompleted(index))}>
                        <FaCheck />
                    </button>
                )}
                {todo.completed && (
                    <button
                        onClick={() => dispatch(markIncompleted(index))}
                        className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded">
                        <FaTimes />
                    </button>
                )}
            </div>
        </li>
    );
}

export default TodoItem;
