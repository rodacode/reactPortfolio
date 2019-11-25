import { createStore } from 'redux';

const initialState = {
    selectedTag: 'all',
    explanation: true
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_TAG':
            return {
                ...state,
                selectedTag:action.payload
            }
        case 'TOGGLE_EXPLANATION':
        return {
            ...state,
            explanation:!state.explanation
        }
        default:
            return state
    }
}
export const store = createStore(
    reducer,
    initialState
)
