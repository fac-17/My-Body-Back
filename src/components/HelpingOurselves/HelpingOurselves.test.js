import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HelpingOurselves from "./HelpingOurselves";

afterEach(cleanup);

describe("Feeling Overwhelmed component renders correctly", () => {
  test("FO component renders header", () => {
    const { getByTestId, getByAltText } = render(
      <Router>
        <HelpingOurselves />
      </Router>
    );

    const header = getByAltText("My Body Back Logo");
    expect(header).toBeInTheDocument();
  });

  test("Check text is render for each icon", () => {
    const { getByText } = render(
      <Router>
        <HelpingOurselves />
      </Router>
    );

    const emotions = getByText("Our Emotions");
    const feelingBetter = getByText("Feeling Better");

    expect(emotions).toBeInTheDocument();
    expect(feelingBetter).toBeInTheDocument();
  });
});
