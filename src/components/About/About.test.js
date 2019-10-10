import React from "react";
import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
    queryByTestid } from "@testing-library/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About.js";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";


afterEach(cleanup);

test("Jest works ok", () => {
    expect(true).toBeTruthy();
});

test("About component renders the title of the about page", () => {
    const { getByText } = render(
        <Router>
            <About />
        </Router>
    );
    const header = getByText("About this App");
    expect(header).toBeInTheDocument();
});

test("Does the butterfly of the header exist in the About page?", () => {
    const { getByAltText } = render(
      <Router>
        <About />
      </Router>
    );
    const header = getByAltText("My Body Back Logo");
    expect(header).toBeInTheDocument();
  });
