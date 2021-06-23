import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMonster } from '../actions/monsterActions'
import Monster from './Monster'

const MonsterCard = (props) => {
    useEffect (() => {props.fetchMonster(); }, []);


    const [shownItems, setShownItems] = useState(1)

    // if(props.loading) {
    //     return <h2>Loading...</h2>
    // }
    
    return (
        <div>
           
                <>
                {props.monsters.slice(0, shownItems).map((item) => (
                <Monster key={item.id} item={item}/>
                ))}
                <button onClick={props.fetchMonster}>New Monster</  button>
            </> 
           
           
        </div>
    )
    
};

const mapState = (state) => {
    console.log(state)
    return {
        loading: state.monsterReducer.loading,
        monsters: state.monsterReducer.monsters
    }
}


export default connect(mapState, {fetchMonster})(MonsterCard);