import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions"

const initialState = {
    editing: false,
    title: "Breath Of The Wild Monsters"
}


export const titleReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.ediditng
            }
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload,
                editing: false
            }
        default:
            return state;
    }
}