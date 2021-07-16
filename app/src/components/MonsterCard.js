import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMonster } from '../actions/monsterActions'
import Monster from './Monster'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    justifyContent: "center",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    // padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MonsterCard = (props) => {
    const classes = useStyles();

    useEffect (() => {props.fetchMonster(); }, []);


    const [shownItems, setShownItems] = useState(1)

    // if(props.loading) {
    //     return <h2>Loading...</h2>
    // }
    
    return (
        <Card className={classes.root}>
           
            <CardContent>
              <div>
                {props.monsters.slice(0, shownItems).map((item) => (
                <Monster key={item.id} item={item}/>
                ))}
              </div> 
              <CardActions>
                <Button variant="contained" onClick={props.fetchMonster}>New Monster</Button>
              </CardActions>   
            </CardContent> 
           
           
        </Card>
    )
    
};

const mapState = (state) => {
    // console.log(state)
    return {
        loading: state.monsterReducer.loading,
        monsters: state.monsterReducer.monsters
    }
}


export default connect(mapState, {fetchMonster})(MonsterCard);