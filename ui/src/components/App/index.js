import React, { useState } from 'react';
import TopNav from '../TopNav';
import Main from '../Main';
import { buildActions, DEFAULT_STATE } from '../../state';

function App() {

  const [state, setState] = useState(DEFAULT_STATE);

  console.log(state);

  const actions = buildActions(state, setState);

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
