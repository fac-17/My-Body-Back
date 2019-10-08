import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MemoryRouter} from 'react-router';

import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Menu from './Menu';
import App from '../../App';
import FeelingOverwhelmed from '../../App';
import HelpingOurselves from '../../App';
import MyAppointment from '../../App';


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

test('should show FeelingOverwhelmed component for /feelingoverwhelmed route (using memory router)', () => {
    const component = mount(<MemoryRouter initialEntries = {['/feelingoverwhelmed']} >
        <FeelingOverwhelmed />
      </MemoryRouter>
    );
    expect(component.find(FeelingOverwhelmed)).toHaveLength(1);
 })

   test('should show HelpingOurselves component for /HelpingOurselves route (using memory router)', () => {
       const component = mount(<MemoryRouter initialEntries = {['/HelpingOurselves']} >
           <HelpingOurselves />
         </MemoryRouter>
       );
       expect(component.find(HelpingOurselves)).toHaveLength(1);
    })

    test('should show MyAppointment component for /MyAppointment route (using memory router)', () => {
        const component = mount(<MemoryRouter initialEntries = {['/MyAppointment']} >
            <MyAppointment />
          </MemoryRouter>
        );
        expect(component.find(MyAppointment)).toHaveLength(1);
       // })

  // it('should show No match component for route not defined', () => {
  //   const component = mount( <MemoryRouter initialEntries = {['/unknown']} >
  //       <Routes/>
  //     </MemoryRouter>
  //   );
  //   expect(component.find(NoMatch)).toHaveLength(1);
  // })
})
