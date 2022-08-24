import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

export function addGoalAction(goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}

export function removeGoalAction(id) {
    return {
        type: REMOVE_GOAL,
        id,
    }
}

export function handleAddGoal(name, cb) {
    return (dispatch) => {
        return API.saveGoal(name)
            .then(goal => {
                dispatch(addGoalAction(goal))
                cb();
            })
            .catch(() => {
                alert('An error occurred. Please Try again')
            })
    }
}

export function handleRemoveGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoalAction(goal.id));
        return API.deleteGoal(goal.id).catch(() => {
            this.props.store.dispatch(addGoalAction(goal));
            alert('An error occurred. Please try again')
        })
    }
}