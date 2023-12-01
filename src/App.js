import React from 'react';
import analyzeImage from './analyzeImage';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Analyzer</h1>
        <input type="text" placeholder="Enter image URL" />
        <button onClick={analyzeImage}>Analyze</button>
        <button>Generate</button>
      </header>
    </div>
  );
}



export default App;

