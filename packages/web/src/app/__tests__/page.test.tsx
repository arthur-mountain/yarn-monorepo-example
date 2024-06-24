import { render } from "@testing-library/react";
import HomePage from "../page";

describe("Home page", () => {
  test("renders home page correctly", () => {
    const { getByText } = render(<HomePage />);

    expect(getByText("Component Button")).toBeDefined();
  });
});
