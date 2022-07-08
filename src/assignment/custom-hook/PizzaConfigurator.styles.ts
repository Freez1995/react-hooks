import { css } from '@emotion/react';

export const button = css`
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;

export const buttonInactive = css`
  ${button}
  &:hover {
    background-color: lightblue;
  }
`;

export const sizeButtonInactive = css`
  ${button}
  background-color: darkgray;
`;

export const buttonSelected = css`
  ${button}
  background-color: lightgreen;
`;
