import React, { useEffect, useState } from 'react';

export const CounterEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  useEffect(() => {
    return () => {
      console.log(`component unmount ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h3>Click Counter</h3>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
