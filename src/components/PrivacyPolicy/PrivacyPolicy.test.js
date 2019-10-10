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



//Test that PrivacyPolicy component renders necessary content

describe('Test privacy policy component renders correctly', () => {

  test("The Privacy policy page renders", () => {
  const component = mount(<MemoryRouter initialEntries = {['/privacypolicy']} >
      <App />
    </MemoryRouter>
  );
  expect(component.find(PrivacyPolicy)).toHaveLength(1);
})

  test('Test that component renders the correct text', () => {
    const { getByText } =
    render(<MemoryRouter><PrivacyPolicy /></MemoryRouter>);
    const privacyText = getByText("A note about privacy");
    expect(privacyText).toBeInTheDocument();
  });
})
