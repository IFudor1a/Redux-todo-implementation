import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

export function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

export function toggleTodoAction(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

export function handleAddTodo(name, cb) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodoAction(todo));
                cb();
            })
            .catch(() => {
                alert('There was an error. Try again')
            })
    }
}

export function handleToggleTodo(id) {
    return (dispatch) => {
        dispatch(toggleTodoAction(id))
        return API.saveTodoToggle(id).catch(() => {
            dispatch(toggleTodoAction(id))
            alert('An error occurred. Please try again');
        })
    }
}

export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodoAction(todo.id))
        return API.deleteTodo(todo.id).catch(() => {
            this.props.store.dispatch(addTodoAction(todo));
            alert('An error occurred. Please try again');
        })
    }
}