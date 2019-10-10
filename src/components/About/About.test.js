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

  describe("About component renders correctly", () => {
    test("You see on the page: title, logo", () => {
        const { getByText, getByAltText } = render(
            <Router>
                <About />
            </Router>
        );
        const header = getByText("About this App");
        const logo = getByAltText("My Body Back Logo");
        expect(header).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
    });
  });
