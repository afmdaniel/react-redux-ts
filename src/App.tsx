import React from 'react';
import './App.css';

import Card from './components/Card'
import Intervalo from './components/Intervalo'

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Card title='Segundo Card' color="blue">
          Content
        </Card>
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
