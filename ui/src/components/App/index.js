import React, { useState, useEffect } from 'react';
import TopNav from '../TopNav';
import Main from '../Main';
import { buildActions, DEFAULT_STATE, RESTAURANTS } from '../../state';

function App() {

  const [state, setState] = useState(DEFAULT_STATE);

  //console.log(state);

  const actions = buildActions(state, setState);

  useEffect(() => {
    console.log('fetching restaurants...');
    actions[RESTAURANTS].getRestaurants();
  }, []);

  console.log('state:', state);

  return (
    <div className="App">
      <header className="app-header">
        <div className="pre-header"></div>
        <TopNav state={state} actions={actions} />
      </header>
      <main>
        <Main state={state} actions={actions} />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
