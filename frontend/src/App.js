import React from 'react';
import ProofPassExample from './components/ProofPassExample';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🔐 ProofPass</h1>
        <p>Prove facts without revealing personal data</p>
      </header>
      <main>
        <ProofPassExample />
      </main>
    </div>
  );
}

export default App;
