import React from 'react';
import { render, fireEvent, cleanup, waitForElement, queryByTestId} from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/";
import Welcome from './Welcome.js';

test('Jest works ok', () => {
  expect(true).toBeTruthy();
});

describe('Welcome component renders to page', () => {
test('Welcome component renders header', () => {
  const { getByTestId } = render(<Welcome />);
  const header = getByTestId("welcome-header");
  expect(header).toBeInTheDocument()

});
});
