import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link, MemoryRouter } from "react-router-dom";
import PrivacyPolicy from './PrivacyPolicy';

afterEach(cleanup);

//Test that Jest is working

test('Jest is working ok in PrivacyPolicy', () => {
  expect(true).toBeTruthy()
});

//Test that PrivacyPolicy component renders necessary content

describe('Test privacy policy component renders correctly', () => {
  test('Test that component renders the correct text', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PrivacyPolicy />
      </MemoryRouter>
    );
    const PrivacyText = getByText("A note about privacy");
    expect(PrivacyText).toBeInTheDocument();
  });
  test('Butterfly button re-directs to the welcome page', async => {
    const { getByTestId } = render(
      <Router>
        <PrivacyPolicy/ >
      </Router>
    );

    const butterfly = getByTestId("butterfly-test-id");
    fireEvent.click(butterfly);

    return waitForElement(() => getByTestId("welcome-text-test-id")).then(output =>
      expect(getByTestId("welcome-text-test-id")).toBeInTheDocument()

   )
})
})
