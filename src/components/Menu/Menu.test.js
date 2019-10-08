import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

afterEach(cleanup);

test('if the three buttons are rendered', () => {
  const { getByTestId } = render(
    <Router>
      <Menu />
    </Router>
  );
  const leftButton = getByTestId('leftButton-menu')
  const middleButton = getByTestId('middleButton-menu')
  const rightButton = getByTestId('rightButton-menu')
  expect(leftButton).toBeInTheDocument()
  expect(middleButton).toBeInTheDocument()
  expect(rightButton).toBeInTheDocument()
})
