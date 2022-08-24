import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../actions/todos";
import {
    RECEIVE_DATA
} from "../actions/shared";

export default function todos(state = [], action) {
    if (action.type === ADD_TODO) {
        return state.concat([action.todo]);
    } else if (action.type === REMOVE_TODO) {
        return state.filter(todo => todo.id !== action.id)
    } else if (action.type === TOGGLE_TODO) {
        return state.map(todo => todo.id !== action.id ? todo : Object.assign({}, todo, {complete: !todo.complete}))
    } else if (action.type === RECEIVE_DATA) {
        return action.todos;
    } else {
        return state;
    }
}