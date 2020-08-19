import React, { useState, useRef } from 'react';
import Game from './Game/game';
import './App.css';

function App() {
  const focusElement = useRef("")
  console.log(focusElement)
  const [state, setState] = useState([]);
  const keyPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault()
      setState([...state, e.target.value])
      e.target.value = ""
    }
  }
  const deletedTask = i => {
    state.splice(i, 1);
    // setState(...state)
    setState([...state])
  }
  const getFocus = () => {
    focusElement.current.focus()
  }
  const hoverMe = (e) => {
    e.target.className = "list-group-item list-group-item-action list-group-item-danger";
  }
  const hoverOut = (e) => {
    e.target.className = "list-group-item list-group-item-action ";
  }
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-6 offset-3 border py-4 shadow-lg">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Task Value</label>
              <input ref={focusElement} type="text" className="form-control" id="task" onKeyDown={e => keyPress(e)} />
              <small id="emailHelp" className="form-text text-muted">What do you need to do?</small>
            </div>
          </form>
          <div className="list-group my-5">
            {
              state.length > 0 ?
                (
                  state.map((task, i) => {
                    return (
                      <button type="button" key={i} className="list-group-item list-group-item-action " onMouseOver={(e) => hoverMe(e)} onMouseOut={(e) => hoverOut(e)} onClick={() => { deletedTask(i) }}>{task}</button>
                    )
                  })
                )
                :
                (
                  <>
                  <Game />
                  <button type="button" className="list-group-item list-group-item-action list-group-item-success mt-2" onClick={getFocus}>Add a task</button>

                  </>
                )

            }
            {
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
