

const initialState = {
    editing: false,
    title: "Breath Of The Wild Monsters"
}


export const titleReducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {
        default:
            return state;
    }
}