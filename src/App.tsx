import React from 'react';

// Styles
import { GlobalStyle } from "./styles/global";
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';
import { Section } from './components/Section';
import { Atractives } from './components/Atractives';
import { Amenities } from './components/Amenities';
import Description from './components/Description';
import { Advertising } from './components/Advertising';

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
      {/* Description */}
      <Section>
        <Description/>
      </Section>
      {/* Comodidades */}
      <Section>
        <Amenities/>
      </Section>
      {/* Propagandas */}
      <Section>
        <Advertising/>
      </Section>
    </div>
  );
}

export default App;
