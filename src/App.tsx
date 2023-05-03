import React from 'react';

// Styles
import { GlobalStyle } from "./styles/global";
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TopBar/>
      <NavBar/>
    </div>
  );
}

export default App;
