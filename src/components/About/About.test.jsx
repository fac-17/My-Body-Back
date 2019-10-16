import React from "react";
import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
    queryByTestid } from "@testing-library/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About.jsx";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

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

    // test("Is there any header on the page?", () => {
    //   const [title] = await waitForElement(() => [
    //     getByText('About', { exact: true }),
    //     getByText('hello', { exact: false })
    //   ]);
    //
    //   expect(title).toHaveContent('About');
    // });
  });
