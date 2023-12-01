import React, { useState } from 'react';
import analyzeImage from './analyzeImage';

function App() {
  const [results, setResults] = useState([]);

  const displayResults = () => {
    return results.map((result, index) => (
      <div key={index}>
        <p>{result.label}</p>
        <img src={result.imageUrl} alt={result.label} />
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Analyzer</h1>
        <input type="text" placeholder="Enter image URL" />
        <button onClick={analyzeImage}>Analyze</button>
        <button>Generate</button>
        {displayResults()}
      </header>
    </div>
  );
}



export default App;

