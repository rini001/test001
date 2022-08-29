import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import  Counter  from "../pages/counter";
describe("Counter", () => {
  describe('initilized with defaultCount=0 and description="My Counter"', () => {
    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<Counter/>);
    });
    it("defaultCount=0 & + clicked counter=1", () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });

    it("defaultCount=0 & + clicked then counter=1", () => {
      fireEvent.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
    });
    it("defaultCount=0 & - clicked then counter=-1", () => {
      fireEvent.click(screen.getByRole("button", { name: "-" }));
      expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
    });
  });
});
