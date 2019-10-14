import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  queryByTestid
} from "@testing-library/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("Jest works ok", () => {
  expect(true).toBeTruthy();
});

test("About component renders about page", () => {
  const { getByTestId } = render(
    <Router>
      <About />
    </Router>
  );
  const header = getByTestId("about-title");
  expect(header).toBeInTheDocument();
});

test("Does the header exist in the About page?", () => {
  const { getByTestId } = render(
    <Router>
      <About />
    </Router>
  );
  const header = getByTestId("butterfly-header");
  expect(header).toBeInTheDocument();
});
