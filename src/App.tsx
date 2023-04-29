import React from 'react';
import { Button } from './components/Button';

// Styles
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Button type="primary" text="seguir" onClick={() => console.log('Primary')} size="xsmall" />
      <Button type="secondary" text="seguir" onClick={() => console.log('Primary')} size="xsmall" transparent />
      <Button type="primary" text="Primary" onClick={() => console.log('Primary')} size="small" />
      <Button type="primary" text="Primary" onClick={() => console.log('Primary')} size="medium" />
      <Button type="primary" text="Primary" onClick={() => console.log('Primary')} size="large" />
      <Button type="primary" text="Primary" onClick={() => console.log('Primary')} size="xlarge" />
      <Button type="secondary" text="secondary" onClick={() => console.log('Primary')} size="medium" />
      <Button type="tertiary" text="tertiary" onClick={() => console.log('Primary')} size="medium" />

    </div>
  );
}

export default App;
