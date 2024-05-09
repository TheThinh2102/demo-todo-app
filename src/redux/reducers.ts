import { 
    ADD_TODO, 
    FILTER_TODOS, 
    MARK_ALL_COMPLETED, 
    MARK_COMPLETED, 
    MARK_INCOMPLETED, 
    REMOVE_TODO, 
    TOGGLE_TODO, 
    UPDATE_SEARCH_TERM 
} from "./actionTypes";

export interface Todo {
    text: string;
    isCompleted: boolean;
}

export interface State {
    todos: Todo[];
    filter: string;
    searchTerm: string;
}

const initialState: State = {
    todos: [],
    filter: "ALL",
    searchTerm: ""
};

const todoReducer = (state: State = initialState, action: { type: string; payload: any }): State => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload.text, isCompleted: false }]
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: !todo.isCompleted } : todo
                )
            };

        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload.id)
            };

        case MARK_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: true } : todo
                )
            };

        case MARK_INCOMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: false } : todo
                )
            };

        case FILTER_TODOS:
            return {
                ...state,
                filter: action.payload.filter
            };

        case UPDATE_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload.searchTerm
            };

        case MARK_ALL_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => ({ ...todo, completed: true }))
            };

        default:
            return state;
    }
};

export default todoReducer;