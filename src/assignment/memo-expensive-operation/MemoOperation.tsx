import React, { useMemo, useState } from 'react';

export const MemoOperation: React.FC = () => {
  const [count, setCount] = useState(0);
  const [fruits, setfruits] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const expensiveCalculation = (num: number) => {
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  function increment() {
    setCount(count + 1);
  }

  function saveWord() {
    inputValue && setfruits([...fruits, inputValue]);
  }

  return (
    <div>
      <div>
        <h1>My favorite fruits</h1>
        {fruits.map((fruit, index) => {
          return <p key={index}>{fruit}</p>;
        })}
        <input onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={saveWord}>Add fruit</button>
      </div>
      <div>
        <h1>Expensive Calculation</h1>
        Count: {count}
        <button onClick={increment}>+</button>
        {calculation}
      </div>
    </div>
  );
};
