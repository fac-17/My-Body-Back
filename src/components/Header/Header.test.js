import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import Header from "./Header.js";
import { exportAllDeclaration } from "@babel/types";

test("butterfly svg exist", () => {
    const { getByTestId } = render(<Header />); 
    const butterfly = getByTestId("butterfly-button");
    expect(butterfly).toBeInTheDocument()
});


