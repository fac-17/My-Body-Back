import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  queryByTestId
} from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FeelingOverwhelmed from "./FeelingOverwhelmed";

afterEach(cleanup);

describe("Feeling Overwhelmed component renders correctly", () => {
  test("FO component renders header", () => {
    const { getByTestId } = render(
      <Router>
        <FeelingOverwhelmed />
      </Router>
    );

    const header = getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
