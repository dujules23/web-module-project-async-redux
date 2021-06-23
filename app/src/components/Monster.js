import React from "react";

import { connect } from "react-redux";


const Monster = (props, i) => {
    return (
        <div className="monster">
            <p>{props.item.name}</p>
            <img src={props.item.image} alt="monster" /> 
            <p>{props.item.description}</p>
            <p></p>
        </div>    
    )
}

const mapState = (state) => {
    console.log(state)
    return {
        monsters: state.monsterReducer.monsters
    }
}

export default connect(mapState)(Monster);