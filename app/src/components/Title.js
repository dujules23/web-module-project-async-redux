import React, { useState } from 'react';



function Title() {
  const [newTitleText, setNewTitleText] = useState('')

  const handleChanges = (e) => {
    setNewTitleText(e.target.value)
  }

  return (
    <div className="Title">
      <h1>Breath Of The Wild Monsters</h1>
      <i />
      <div>
        <input 
          className="title-input"
          type="text"
          name="newTitleText"
          value={newTitleText}
          onChange={handleChanges}
        />
        <button>
          Update Title
        </button>
      </div>
    </div>
  );
}

export default Title;
