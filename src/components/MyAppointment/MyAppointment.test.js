import React from "react";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyAppointment from "./MyAppointment";

afterEach(cleanup);

describe("My Appointment renders correctly", () => {
  test("You see on the page: title, logo, icons", () => {
      const { getByText, getByAltText } = render(
          <Router>
              <MyAppointment />
          </Router>
      );
      const logo = getByAltText("My Body Back Logo");
      const title1 = getByText("My Appointment");
      const title2 = getByText("Preparation");
      const parag = getByText("Please ask me what I need:");
      const button = getByText("Download");
      const title3 = getByText("After your appointment");

      expect(logo).toBeInTheDocument();
      expect(title1).toBeInTheDocument();
      expect(title2).toBeInTheDocument();
      expect(parag).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(title3).toBeInTheDocument();
  });
});
