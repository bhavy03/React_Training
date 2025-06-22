import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import { expect, test } from '@jest/globals';

test("renders greeting with given name", () => {
  render(<Greeting name="Bhavya" />);
  const headingElement = screen.getByText(/Hello, Bhavya!/i);
  expect(headingElement).toBeInTheDocument();
});
