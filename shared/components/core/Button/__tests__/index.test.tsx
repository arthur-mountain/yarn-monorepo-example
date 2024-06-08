import { fireEvent, act, render } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("renders button correctly", () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText("Test Button")).toBeDefined();
  });

  test.fails("clicks button correctly", () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Button onClick={onClick}>Test Button</Button>,
    );

    fireEvent(getByText("Test Button"), new MouseEvent("click"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
