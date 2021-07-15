import React, { useState } from 'react';
import { connect } from "react-redux"
import { toggleEditing, updateTitle } from "../actions/titleActions"

import { IconButton, makeStyles, Container} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    border: 0,
    color: 'black',
    fontSize: 14
  }
});

function Title(props) {
  const [newTitleText, setNewTitleText] = useState('')

  const classes = useStyles();

  const handleChanges = (e) => {
    setNewTitleText(e.target.value)
  }

  return (
    <Container className={classes.root}>
      {!props.editing ? (
      <h1>
        {props.title}{" "}
        <IconButton aria-label="delete" onClick={() => props.toggleEditing()}>edit</IconButton>
      </h1>
      ) : (
      <div>
        <input 
          className="title-input"
          type="text"
          name="newTitleText"
          value={newTitleText}
          onChange={handleChanges}
        />
        <button onClick={() => props.updateTitle(newTitleText)}>
          Update Title
        </button>
      </div>
      )}   
    </Container>
  );
};

const mapState =(state) => {
  return {
    editing: state.titleReducer.editing,
    title: state.titleReducer.title
  }
}

const mapDispatch = { toggleEditing, updateTitle }

export default connect(mapState, mapDispatch)(Title);
