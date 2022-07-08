import React, { useEffect } from 'react';

export const AlertOnMount: React.FC = () => {
  useEffect(() => {
    console.log('AlertOnMountComponent mounted');
  }, []);

  return <div>Component is mounted</div>;
};
