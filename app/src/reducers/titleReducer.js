import { TOGGLE_EDITING } from "../actions/titleActions"

const initialState = {
    editing: false,
    title: "Breath Of The Wild Monsters"
}


export const titleReducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.ediditng
            }
        default:
            return state;
    }
}