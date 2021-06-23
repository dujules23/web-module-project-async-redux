import { FETCH_MONSTER_START, FETCH_MONSTER_HAPPY } from "../actions/monsterActions"

const initialState = {
    loading: false,
    monsters: []
}


export const monsterReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MONSTER_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_MONSTER_HAPPY:
            return {
                ...state,
                monsters: action.payload,
            }  
        default:
            return state;
    }
}