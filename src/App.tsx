import React from 'react';
import './App.css';

import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Card title='Primeiro Card' color="red">
          Content
        </Card>
        <Card title='Segundo Card' color="blue">
          Content
        </Card>
      </div>
      <div className="linha">
        <Card title='Terceiro Card' color="green">
          Content
        </Card>
        <Card title='Quarto Card' color="purple">
          Content
        </Card>
      </div>
    </div>
  );
}

export default App;
