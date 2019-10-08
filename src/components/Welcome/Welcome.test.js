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
import Welcome from "./Welcome.js";

afterEach(cleanup);

test("Jest works ok", () => {
  expect(true).toBeTruthy();
});

describe("Welcome component renders to page", () => {
  test("Welcome component renders header", () => {
    const { getByTestId } = render(
      <Router>
        <Welcome />
      </Router>
    );
    const header = getByTestId("welcome-title");
    expect(header).toBeInTheDocument();
  });
});
