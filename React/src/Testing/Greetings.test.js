import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greetings";
import "@testing-library/jest-dom"; // for custom matchers

test("renders greeting with name", () => {
  render(<Greeting name="Bhavya" />);
  expect(screen.getByText("Hello, Bhavya!")).toBeInTheDocument();
});

test("renders greeting with default name when no name is passed", () => {
  render(<Greeting />);
  expect(screen.getByText("Hello, Guest!")).toBeInTheDocument();
});
