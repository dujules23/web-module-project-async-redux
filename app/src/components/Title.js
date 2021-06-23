import React, { useState } from 'react';
import { connect } from "react-redux"
import { toggleEditing, updateTitle } from "../actions/titleActions"

import { IconButton } from '@material-ui/core';


function Title(props) {
  const [newTitleText, setNewTitleText] = useState('')

  const handleChanges = (e) => {
    setNewTitleText(e.target.value)
  }

  return (
    <div className="Title">
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
    </div>
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
