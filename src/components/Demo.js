import React, { useState } from 'react';


function Demo() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let content;
  if (selectedOption === 'option1') {
    content = <p>Option 1 is selected.</p>;
  } else if (selectedOption === 'option2') {
    content = <p>Option 2 is selected.</p>;
  } else {
    content = <p>Please select an option.</p>;
  }


  return (
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
        Option 1
      </label>
      <label>
        <input
          className='m-3'
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      {content}
    </div>
  );
}

export default Demo;
