import React from 'react';
import './App.css';
import Products from './products/Products';

const listofitem = [
  'Earth', 'mango', 'Moon', 'Saturn'
]

function App() {
  return (
    <div className="App">
      <Products items={listofitem} />
    </div>
  );
}

export default App;
