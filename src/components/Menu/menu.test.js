import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Menu from './menu';

afterEach(cleanup);

test('Jest is working ok', () => {
  expect(true).toBeTruthy()
});

test('if the three buttons are rendered', () => {
  const { getByTestId } = render(<Menu />);
  // const leftButton = getByTestId('leftButton-menu')
  // const middleButton = getByTestId('middleButton-menu')
  // const rightButton = getByTestId('rightButton-menu')
  expect(getByTestId('leftButton-menu')).toBeInTheDocument()
  expect(getByTestId('middleButton-menu')).toBeInTheDocument()
  expect(getByTestId('rightButton-menu')).toBeInTheDocument()
})
