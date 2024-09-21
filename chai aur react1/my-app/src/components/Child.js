import React, { useState } from 'react';

const Child = ({ addParent }) => {
  const [num3, setNum3] = useState('');

  const handleInputChange = (event) => {
    const val = event.target.value;
    setNum3(val);
    addParent(+val); // Pass 0 if the value is not a number
  };

  return (
    <div>
      <input
        type="number"
        value={num3}
        onChange={handleInputChange}
        placeholder="Enter a number"
        className='inputFromUser'
        style={{
          height: '40px',
          marginRight: '10px',
          width: 'auto',
          borderRadius: '5px'
        }}
      />
    </div>
  );
};

export default Child;
