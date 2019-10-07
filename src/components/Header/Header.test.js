import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";
import Header from "./Header.js";
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup);

test("butterfly svg exist", () => {
    const { getByTestId } = render(<Header />); 
    const butterfly = getByTestId("butterfly-button");
    expect(butterfly).toBeInTheDocument()
});

test("does the logo 'My Body Back' exists?", () => {
    const { getByTestId } = render(<Header />); 
    const MyBodyBackLogo = getByTestId("MyBodyBack-logo");
    expect(MyBodyBackLogo).toBeInTheDocument()
});

// test("butterfly svg links you to another page", () => {
//     const { getByTestId } = render(<Header />); 
//     const MyBodyBackLogo = getByTestId("MyBodyBack-logo");
//     expect(MyBodyBackLogo).toBeInTheDocument()
// });


