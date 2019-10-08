import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import Header from "./Header.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

afterEach(cleanup);

test("butterfly svg exist", () => {
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>
  );
  const butterfly = getByTestId("butterfly-button");
  expect(butterfly).toBeInTheDocument();
});

test("does the logo 'My Body Back' exists?", () => {
  const { getByTestId } = render(
    <Router>
      <Header />
    </Router>
  );
  const MyBodyBackLogo = getByTestId("MyBodyBack-logo");
  expect(MyBodyBackLogo).toBeInTheDocument();
});
