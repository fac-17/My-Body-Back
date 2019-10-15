import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NotesOfLove from "./NotesOfLove";

afterEach(cleanup);

describe("Notes of Love renders correctly", () => {
  test("You see on the page: title, logo", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <NotesOfLove />
          </Router>
      );
      const logo = getByAltText("My Body Back Logo");
      const title = getByText("Notes of Love");
      const instaicon = getByAltText("instagram");
      const parag = getByText("See more on Instagram");

      expect(logo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(instaicon).toBeInTheDocument();
      expect(parag).toBeInTheDocument();
  });
});
