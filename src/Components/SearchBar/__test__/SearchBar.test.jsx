import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "..";

test("input init value should be empty", () => {
  render(<SearchBar />);
  const inputEl = screen.getByRole("textbox");
  expect(inputEl.value).toBe("");
});

test("input value change correctly", () => {
  render(<SearchBar />);
  const inputEl = screen.getByRole("textbox");
  fireEvent.change(inputEl, { target: { value: "colombo" } });

  expect(inputEl.value).toBe("colombo");
});

test("search btn click", () => {
  const mockClickFn = jest.fn();

  render(<SearchBar searchBtnClickFn={mockClickFn} />);
  const searchBtnEl = screen.getByRole("button");
  fireEvent.click(searchBtnEl);

  expect(mockClickFn).toHaveBeenCalled();
});
