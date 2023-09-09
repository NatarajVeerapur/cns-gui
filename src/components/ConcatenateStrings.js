// src/components/ConcatenateStrings.js
'use client';

import React, { useState } from 'react';
import { Button } from 'flowbite-react';



const ConcatenateStrings = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [result, setResult] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let content;
  if (selectedOption === 'option1') {
    content = <p>Plafair is selected.</p>;
    
  } else if (selectedOption === 'option2') {
    content = <p>Ceaser is selected.</p>;
  } else {
    content = <p>Please select an option.</p>;
  }

  const playFairEncrypt = () => {

    
    if (selectedOption === 'option1') {
      window.content = <p>Plafair is selected.</p>;
      fetch(`http://127.0.0.1:8000/api/playFairEncrypt/?plain_text=${string1}&key=${string2}`)
      .then(response => response.json())
      .then(data => setResult(data.concatenated_string))
      .catch(error => console.error('Error:', error));
    }

    
  };

  const playFairDecrypt = () => {
    if (selectedOption === 'option1') {
      content = <p>Plafair is selected.</p>;
      fetch(`http://127.0.0.1:8000/api/playFairDecrypt/?result=${result}&key=${string2}`)
      .then(response => response.json())
      .then(data => setResult(data.concatenated_string))
      .catch(error => console.error('Error:', error));
    }

    
  };

  return (
    <div className="m-5">
      <input className='m-2 mb-4' placeholder='Plaintext' type="text" value={string1} onChange={e => setString1(e.target.value)} />
      <input className='m-2 mb-4' placeholder='Key' type="text" value={string2} onChange={e => setString2(e.target.value)} />

      <div>
        <label>
          <input
            className='m-3'
            type="radio"
            value="option1"
            handleOptionChange={handleOptionChange}
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Plafair
        </label>
        <label>
          <input
            className='m-3'
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Ceaser
        </label>
        {content}
      </div>

      <div className="flex">
        <Button className='ml-1 mr-3' onClick={playFairEncrypt}>Encrypt</Button>
        <Button onClick={playFairDecrypt}>Decrypt</Button>
      </div>
      {/* </div> */}
      {/* <button onClick={concatenateStrings}>Concatenate</button> */}
      <p className='m-3 font-sans font-medium'>Result: {result}</p>
    </div>
  );
};

export default ConcatenateStrings;
