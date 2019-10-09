import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Emotions from "./Emotions";

afterEach(cleanup);

describe("DUMMY TEST : Feeling Overwhelmed component renders correctly", () => {
  test("FO component renders header", () => {
      <Router>
        <Emotions />
      </Router>
  });
})
