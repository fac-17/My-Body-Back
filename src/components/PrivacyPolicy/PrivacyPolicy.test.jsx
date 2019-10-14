import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link, MemoryRouter } from "react-router-dom";
import PrivacyPolicy from './PrivacyPolicy';

afterEach(cleanup);



//Test that PrivacyPolicy component renders necessary content

describe('Test privacy policy component renders correctly', () => {

  test("The Privacy policy page renders", () => {
    render(<Router><PrivacyPolicy /></Router>)
  });

  test('Test that component renders the correct text', () => {
    const { getByText } =
    render(<MemoryRouter><PrivacyPolicy /></MemoryRouter>);
    const privacyText = getByText("A note about privacy");
    expect(privacyText).toBeInTheDocument();
  });
})
