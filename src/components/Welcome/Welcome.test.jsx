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
import Welcome from "./Welcome";

afterEach(cleanup);

// Jest works test

test("Jest works ok", () => {
  expect(true).toBeTruthy();
});

//Test that the Welcome component renders necessary content

describe("Welcome component renders to page with menu", () => {
  test("Welcome component renders header", () => {
    const { getByTestId } = render(
      <Router>
        <Welcome />
      </Router>
    );
    const header = getByTestId("welcome-title");
    expect(header).toBeInTheDocument();
  });
  test("Welcome component renders menu", () => {
    const { getByTestId } = render(
      <Router>
        <Welcome />
      </Router>
    );
    const menuButton = getByTestId("middleButton-menu");
    expect(menuButton).toBeInTheDocument();
  });
});
