import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  queryByTestId
} from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About.js";

afterEach(cleanup);

test("Jest works ok", () => {
  expect(true).toBeTruthy();
});
