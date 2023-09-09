import React, { useState } from 'react';





const Radio = () =>{

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
          {/* {content} */}
        </div>
      );

};