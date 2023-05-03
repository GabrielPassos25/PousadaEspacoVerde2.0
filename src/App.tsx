import React from 'react';

// Styles
import { GlobalStyle } from "./styles/global";
import { TopBar } from './components/TopBar';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TopBar/>
    </div>
  );
}

export default App;
