import React, { useEffect, useState } from 'react';

export const RadnomNumGenerator: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number>();
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(10);

  function generateRandomNumber(min: number, max: number) {
    min > max
      ? console.log("minimum number can't be greater than maximum")
      : setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min));
  }

  useEffect(() => {
    randomNumber && console.log(randomNumber);
  }, [randomNumber]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300 }}>
      <h3>Specify range of random number generator:</h3>
      <p>minimum number:</p>
      <input
        type='number'
        value={minNumber}
        onChange={(e) => setMinNumber(parseInt(e.target.value))}
      />
      <p>maximum number:</p>
      <input
        type='number'
        value={maxNumber}
        onChange={(e) => setMaxNumber(parseInt(e.target.value))}
      />
      <button
        style={{ marginTop: 10 }}
        onClick={() => generateRandomNumber(minNumber, maxNumber)}
      >
        Generate number
      </button>
    </div>
  );
};
