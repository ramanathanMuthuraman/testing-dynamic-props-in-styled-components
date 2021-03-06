import * as React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import App from "./app";

describe("App", () => {
  afterEach(cleanup);
  it("check element by aria label", () => {
    const { getByLabelText } = render(<App />);
    expect(getByLabelText("container")).toBeInTheDocument();
  });
  it("shows correct color with color code", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("CompA-A")).toHaveStyle("background: #ff0000");
  });
  it("update color on button click", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("CompA-A")).toHaveStyle("background: #ff0000");
    fireEvent.click(getByTestId("update-color"));
    expect(getByTestId("CompA-A")).toHaveStyle("background: #00ff00");
  });
});
