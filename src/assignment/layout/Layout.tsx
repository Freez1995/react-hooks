/** @jsxImportSource @emotion/react */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { navigation } from './Layout.styles';

export const Layout: React.FC = () => {
  return (
    <>
      <div css={navigation}>
        <a href='/'>Alert on mount</a>
        <a href='/1'>Last value when unmounted</a>
        <a href='/2'>Random number generator</a>
        <a href='/3'>Memo expensive operation</a>
        <a href='/4'>Custom hook</a>
      </div>
      <Outlet />
    </>
  );
};
