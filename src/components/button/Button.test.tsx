import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";

describe("Icon Component", () => {
  test("It should render correctly", () => {
    render(<Button icon={"done"} />);
    const button = document.getElementsByClassName("im-button")[0];
    expect(button).toBeInTheDocument();
  });

  test("It should not be able to call function if disabled", () => {
    const handleClick = vi.fn();

    render(<Button icon={"done"} onClick={handleClick} disabled />);
    const button = document.getElementsByClassName("im-button")[0];
    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
