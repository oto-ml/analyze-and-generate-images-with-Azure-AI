import React from 'react';

function App() {
  #write a title for the app
  #put a box to input the image URL
  #put a button to analyze the image
  #put a button to generate the image

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Analyzer</h1>
        <input type="text" placeholder="Enter image URL" />
        <button>Analyze</button>
        <button>Generate</button>
      </header>
    </div>
  );
}

export default App;
