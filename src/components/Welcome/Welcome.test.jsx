import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MemoryRouter} from 'react-router';

import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Welcome from "./Welcome.jsx";
import App from '../../App';

afterEach(cleanup);

describe("Welcome renders correctly", () => {
  test("Welcome page renders", () => {
  const component = mount(
    <MemoryRouter initialEntries = {['/welcome']} >
      <App />
    </MemoryRouter>
  );
  expect(component.find(Welcome)).toHaveLength(0);
})

  test("You see on the page: title, logo, icons", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <Welcome />
          </Router>
      );

      const title1 = getByText("Welcome");
      const brainicon = getByAltText("brain");
      const waveicon = getByAltText("wave");
      const flowericon = getByAltText("flower");

      expect(title1).toBeInTheDocument();
      expect(brainicon).toBeInTheDocument();
      expect(waveicon).toBeInTheDocument();
      expect(flowericon).toBeInTheDocument();
  });
});
