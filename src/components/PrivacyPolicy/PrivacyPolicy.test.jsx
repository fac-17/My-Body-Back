import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MemoryRouter} from 'react-router';

import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PrivacyPolicy from './PrivacyPolicy';
import App from '../../App';

afterEach(cleanup);

describe("The Privacy policy renders correctly", () => {
  test("The Privacy policy page renders", () => {
  const component = mount(
    <MemoryRouter initialEntries = {['/privacypolicy']} >
      <App />
    </MemoryRouter>
  );
  expect(component.find(PrivacyPolicy)).toHaveLength(1);
})

  test("You see on the page: title, logo, icons", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <PrivacyPolicy />
          </Router>
      );

      const title1 = getByText("A note about privacy");
      const privacyText = getByAltText("Go to welcome page");

      expect(title1).toBeInTheDocument();
      expect(privacyText).toBeInTheDocument();
  });
});
