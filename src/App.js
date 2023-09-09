// src/App.js
'use client';
import React from 'react';

import ConcatenateStrings from './components/ConcatenateStrings';
import Demo from './components/Demo';

function App() {


 
  return (
    <div className='m-7'>
      <h1 className='flex font-bold mt-7 ml-7'>Plafair cipher</h1>
      <ConcatenateStrings />
      {/* <Demo /> */}
     
    </div>
  );
}

export default App;
