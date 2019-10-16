import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HelpingOurselves from "./HelpingOurselves.jsx";

afterEach(cleanup);

describe("Helping ourselves renders correctly", () => {
  test("You see on the page: title, logo, icons", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <HelpingOurselves />
          </Router>
      );
      const logo = getByAltText("My Body Back Logo");
      const title = getByText("Helping Ourselves");
      const emotions = getByText("Our Emotions");
      const iceberg = getByAltText("our emotions");
      const feelingBetter = getByText("Feeling Better");
      const bird = getByAltText("feeling better");

      expect(logo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(emotions).toBeInTheDocument();
      expect(iceberg).toBeInTheDocument();
      expect(feelingBetter).toBeInTheDocument();
      expect(bird).toBeInTheDocument();
  });
});
