// src/App.js
import React from 'react';
import Button from './button';
import Container from './container';
import Navigation from './navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Container />
      <Button />
    </div>
  );
};

export default App;
