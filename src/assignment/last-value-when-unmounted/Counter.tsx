import React, { useState } from 'react';
import { CounterEffect } from './CounterEffect';

export const Counter: React.FC = () => {
  const [showComponent, setShowComponent] = useState(true);

  function onClick() {
    setShowComponent(!showComponent);
  }

  return (
    <div>
      {showComponent && <CounterEffect />}
      <button onClick={onClick}>Show/Hide component</button>
    </div>
  );
};
