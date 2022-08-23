import { sum } from "./sum";

it("sum of 5 and 2 will return 7", () => {
  expect(sum(5, 2)).toBe(7);
});
it("sum of 8 and 2 will return 10", () => {
  expect(sum(8, 2)).toBe(10);
});
