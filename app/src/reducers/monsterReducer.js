// import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions"

const initialState = {
    monster: "Test Monster Name",
    image: '',
    description: ''
}


export const monsterReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}