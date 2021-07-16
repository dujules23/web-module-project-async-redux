import React from "react";

import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";


const Monster = (props, i) => {
    return (
        <div className="monster">
            <Typography variant="h3" component="h2">{props.item.name}</Typography>
            <img src={props.item.image} alt="monster" /> 
            <p>{props.item.description}</p>
        </div>    
    )
}

const mapState = (state) => {
    // console.log(state)
    return {
        monsters: state.monsterReducer.monsters
    }
}

export default connect(mapState)(Monster);