import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";

afterEach(cleanup);

describe("Page Not Found renders correctly", () => {
  test("You see on the page: title, logo", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <PageNotFound />
          </Router>
      );

      const parag = getByText("page is not found!!!404");
      expect(parag).toBeInTheDocument();
  });
});
