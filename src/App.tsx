import React from 'react';

// Styles
import { GlobalStyle } from "./styles/global";
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';
import { Section } from './components/Section';
import { Atractives } from './components/Atractives';
import { Amenities } from './components/Amenities';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TopBar/>
      <NavBar/>
      {/* Atrativos */}
      <Section>
        <Atractives/>
      </Section>
      {/* Comodidades */}
      <Section>
        <Amenities/>
      </Section>
    </div>
  );
}

export default App;
