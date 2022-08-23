import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
it('renders "hello-world"', () => {
  render(<Hello />);
  const el = screen.getByText("Hello World!");
  expect(el).toBeInTheDocument();
});
