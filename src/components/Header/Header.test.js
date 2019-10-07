import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Header from "./Header.js";

test("butterfly svg exist", () => {
    const { getByText, getByLabelText, getByTestId } = render(<Header />); 
});
