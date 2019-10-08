import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HelpingOurselves from "./HelpingOurselves";

afterEach(cleanup);

describe("Feeling Overwhelmed component renders correctly", () => {
  test("FO component renders header", () => {
    const { getByTestId } = render(
      <Router>
        <HelpingOurselves />
      </Router>
    );

    const header = getByTestId("butterfly-header");
    expect(header).toBeInTheDocument();
  });
});
