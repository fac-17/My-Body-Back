import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FeelingBetter from "./FeelingBetter";

afterEach(cleanup);

describe("Feeling Overwhelmed component renders correctly", () => {
  test("You see on the page: title, logo", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <FeelingBetter />
          </Router>
      );
      const logo = getByAltText("My Body Back Logo");
      const title = getByText("Feeling Better");
      const soothing = getByText("Soothing");
      // const video = getByText("Your browser does not support video.");
      // const audio = getByText("Your browser does not support video.");
      expect(logo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(soothing).toBeInTheDocument();
  });
});
