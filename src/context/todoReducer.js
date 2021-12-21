import { ADD_TODO, CLEAR_COMPLETED, REMOVE_TODO, UPDATE_TODO, REORDER_TODOS } from './actionTypes';
const todoReducer (state, action) => {
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

        case REORDER_TODOS:
            const items = Array.from(state);
            const [reorderedItem] = items.splice(action.payload.source.index, 1);
            items.splice(action.payload.destination.index, 0, reorderedItem);
            return items;
        default:
            return state;
    }
}
export default todoReducer;