import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Emotions from "./Emotions";

afterEach(cleanup);

describe("Emotions component renders correctly", () => {
  test("You see on the page: title, logo", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <Emotions />
          </Router>
      );
      const logo = getByAltText("My Body Back Logo");
      const title1 = getByText("Trauma, the Brain and our Emotions");
      const title2 = getByText("Why is this so difficult?!");
      // const video = getByText("Your browser does not support video.");
      // const audio = getByText("Your browser does not support video.");
      expect(logo).toBeInTheDocument();
      expect(title1).toBeInTheDocument();
      expect(title2).toBeInTheDocument();
  });
});
