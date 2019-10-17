import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FeelingOverwhelmed from "./FeelingOverwhelmed";

afterEach(cleanup);

describe("Feeling Overwhelmed renders correctly", () => {
  test("You see on the page: title, logo, icons", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <FeelingOverwhelmed />
          </Router>
      );
      const logo = getByAltText("My Body Back Logo");
      const title = getByText("Feeling Overwhelmed?");
      const NOL = getByText("Notes Of Love");
      const HAS = getByText("Help & Support");
      expect(logo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(NOL).toBeInTheDocument();
      expect(HAS).toBeInTheDocument();
  });
});
