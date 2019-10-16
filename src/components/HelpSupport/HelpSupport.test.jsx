import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HelpSupport from "./HelpSupport";

afterEach(cleanup);

describe("Help & Support renders correctly", () => {
  test("You see on the page: title, logo, icons", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <HelpSupport />
          </Router>
      );
      const logo = getByAltText("My Body Back Logo");
      const title = getByText("Help & Support");
      const emailsamaritans = getByAltText("email samaritans");
      const callsamaritans = getByAltText("call samaritans");
      const samaritanstitle = getByText("The Samaritans");
      const callrapecrisis = getByAltText("call rapecrisis Scotland");

      expect(logo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(emailsamaritans).toBeInTheDocument();
      expect(callsamaritans).toBeInTheDocument();
      expect(samaritanstitle).toBeInTheDocument();
      expect(callrapecrisis).toBeInTheDocument();
  });
});
