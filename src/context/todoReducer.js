import { ADD_TODO, CLEAR_COMPLETED, REMOVE_TODO, UPDATE_TODO } from './actionTypes';
export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, action.payload
            ]

        case UPDATE_TODO:
            let stateAfterUpdate = state.map(todo => {
                if (todo.id === action.payload.id) return action.payload
                return todo
            });
            return stateAfterUpdate;

        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)

        case CLEAR_COMPLETED:
            let stateAfterClear = state.filter(todo => !todo.checked);
            return stateAfterClear;

        default:
            return state;
    }
}