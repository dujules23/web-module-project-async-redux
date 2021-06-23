import axios from "axios"
export const FETCH_MONSTER_START = "FETCH_MONSTER_START";
export const FETCH_MONSTER_HAPPY = "FETCH_MONSTER_HAPPY";
export const FETCH_MONSTER_SAD = "FETCH_MONSTER_SAD";

export const fetchMonster = () => (dispatch) => {
    // Hit the api
    dispatch({ type: FETCH_MONSTER_START});

    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')


    .then(res => {
        console.log(res.data.data);
        dispatch({ type: FETCH_MONSTER_HAPPY, payload: res.data.data });
    })

    .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_MONSTER_SAD, payload: err})
    })

}