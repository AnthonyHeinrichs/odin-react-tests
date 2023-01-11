import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders Vancouver Canucks are going to make the playoffs", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders just kidding after button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/Just kidding/i);
  });
});
