import { render } from "@testing-library/react";
import Home from "../page";

describe("Home page", () => {
  test("renders home page correctly", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Component Button")).toBeInstanceOf("button");
  });
});
